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
    name: 'McLaren Artura ass',
    price: '320',
    seats: '2',
    power: '671',
    engine: '3',
    image: [],
    imagesFile: [],
    drive: 'RWD',
    acceleration: '3 sec',
    type: 'Sport',
    carBrand: 'Rolls-Royce',
  },
];

const transformBrandID = (updatedRow, brands) => {
  const idBrand = brands.find(brand => {
    return brand.name === updatedRow.carBrand;
  });

  return { ...updatedRow, carBrand: idBrand.id };
};

const transformBrandName = (car, brands) => {
  const matchingBrand = brands.find(brand => brand.id === car.carBrand);
  return {
    ...car,
    carBrand: matchingBrand.name,
  };
};

export default function AdminTable({ params }) {
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
        const result = await axios(`/api/admin/carlist`);
        const newData = result.data.map(car => transformBrandName(car, brands));

        setRows(newData);
      }
    };
    const handleDeleteImage = async event => {
      const id = event.target.dataset.id;
      const deleteImage = event.target.dataset.image;

      if (id !== 'new') {
        await axios.patch(`/api/carlist`, { id, deleteImage });
        const result = await axios(`/api/admin/carlist`);
        const newData = result.data.map(car => transformBrandName(car, brands));

        setRows(newData);
      }
    };

    setColumns(() => newColumns({ brands, handleAddImage, handleDeleteImage }));
  }, [brands]);

  useEffect(() => {
    (async () => {
      const result = await axios(`/api/admin/carlist`);
      const resultBrand = await axios(`/api/brand`);
      setBrands(resultBrand.data);

      const newData = result.data.map(car =>
        transformBrandName(car, resultBrand.data)
      );

      setRows(newData);
    })();
  }, []);

  const handleProcessRowUpdate = async updatedRow => {
    const newCar = transformBrandID(updatedRow, brands);

    // push
    await axios.patch(`/api/carlist`, newCar);
  };
  const handleProcessRowUpdateError = err => {};
  if (!rows) {
    return <h1>Loading</h1>;
  }

  const handleAddNewCar = async () => {
    const carBrand = transformBrandID(newCar[0], brands);
    const { id, imagesFile, image, ...car } = carBrand;

    const formData = new FormData();

    for (let index = 0; index < imagesFile.length; index++) {
      formData.append('image', imagesFile[index]);
    }

    for (const property in car) {
      formData.append(property, car[property]);
    }

    // push
    const result = await axios.post(`/api/admin/carlist`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const carBrandId = transformBrandName(result, brands);

    setRows(prev => [...prev, carBrandId]);
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
            }}
            pageSizeOptions={[5, 10]}
            processRowUpdate={(updatedRow, originalRow) => {
              handleProcessRowUpdate(updatedRow);
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
          hideFooter={true}
          onProcessRowUpdateError={handleProcessRowUpdateError}
        />
        <Button onClick={handleAddNewCar}>Add new car</Button>
      </ThemeProvider>
    </div>
  );
}
