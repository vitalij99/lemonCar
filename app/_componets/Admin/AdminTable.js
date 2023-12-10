'use client';
import '@/app/styles/adminTable.scss';

import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

import { useEffect, useState } from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { newColumns } from '@/lib/columns';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const NEW_CARINFO = [
  {
    id: 'new',
    name: 'name',
    price: '0',
    seats: '0',
    power: '0',
    engine: '0',
    image: [],
    imagesFile: [],
    drive: 'RWD',
    acceleration: '1 sec',
    type: 'Sport',
    carBrand: 'Rolls-Royce',
  },
];

const transformBrandName = (updatedRow, brands) => {
  const idBrand = brands.find(brand => brand.name === updatedRow.carBrand);

  return { ...updatedRow, carBrand: idBrand.id };
};

export default function AdminTable() {
  const [rows, setRows] = useState(null);
  const [brands, setBrands] = useState([]);
  const [columns, setColumns] = useState([]);
  const [newCar, setNewCar] = useState(NEW_CARINFO);

  useEffect(() => {
    const handleAddImage = async event => {
      const newImage = [];
      const idCar = event.target.dataset.id;
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const imagesFile = URL.createObjectURL(files[i]);
        newImage.push(imagesFile);
      }

      if (idCar === 'new') {
        setNewCar(prev => {
          return [{ ...prev[0], image: newImage, imagesFile: files }];
        });
      } else {
        // change of car

        const formData = new FormData();

        formData.append('id', idCar);

        for (let index = 0; index < files.length; index++) {
          formData.append('image', files[index]);
        }
        // push
        await axios.patch(`/api/admin/carlist`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const { data } = await axios(`/api/admin/carlist`);
        setRows(data);
      }
    };
    const handleDeleteImage = async (id, deleteImage) => {
      if (id !== 'new') {
        await axios.patch(`/api/carlist`, { id, deleteImage });
        const { data } = await axios(`/api/admin/carlist`);
        setRows(data);
      }
    };
    const handleDeleteCar = async id => {
      await axios.delete(`/api/admin/carlist?id=${id}`);
      const { data } = await axios(`/api/admin/carlist`);
      setRows(data);
    };
    setColumns(() =>
      newColumns({ brands, handleAddImage, handleDeleteImage, handleDeleteCar })
    );
  }, [brands]);

  useEffect(() => {
    (async () => {
      const result = await axios(`/api/admin/carlist`);
      const resultBrand = await axios(`/api/brand`);
      setBrands(resultBrand.data);

      setRows(result.data);
    })();
  }, []);

  const handleProcessRowUpdate = async (updatedRow, originalRow) => {
    // push

    if (originalRow.carBrand !== updatedRow.carBrand) {
      updatedRow = transformBrandName(updatedRow, brands);
    }

    await axios.patch(`/api/carlist`, updatedRow);
  };
  const handleProcessRowUpdateError = err => {};
  if (!rows) {
    return <h1>Loading</h1>;
  }

  const handleAddNewCar = async () => {
    const carBrand = transformBrandName(newCar[0], brands);

    const { id, imagesFile, image, ...car } = carBrand;

    const formData = new FormData();

    for (let index = 0; index < imagesFile.length; index++) {
      formData.append('image', imagesFile[index]);
    }

    for (const property in car) {
      formData.append(property, car[property]);
    }

    // push
    const { data } = await axios.post(`/api/admin/carlist`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setRows(prev => [...prev, data]);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            className="tablet"
            rows={rows}
            columns={columns}
            getRowHeight={() => 'auto'}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
              columns: {
                ...rows.initialState?.columns,
                columnVisibilityModel: {
                  id: false,
                },
              },
            }}
            pageSizeOptions={[5, 10]}
            processRowUpdate={(updatedRow, originalRow) => {
              handleProcessRowUpdate(updatedRow, originalRow);
            }}
            onProcessRowUpdateError={handleProcessRowUpdateError}
          />
        </div>
        <h1>ADD new</h1>
        <DataGrid
          className="tablet"
          rows={newCar}
          columns={columns}
          processRowUpdate={(updatedRow, originalRow) => {
            setNewCar([{ ...updatedRow }]);
          }}
          initialState={{
            columns: {
              ...rows.initialState?.columns,
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          hideFooter={true}
          onProcessRowUpdateError={handleProcessRowUpdateError}
        />
        <Button onClick={handleAddNewCar}>Add new car</Button>
      </ThemeProvider>
    </div>
  );
}
