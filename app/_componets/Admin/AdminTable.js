'use client';
import '@/app/styles/adminTable.scss';

import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { newColumns } from '@/lib/columns';

const NEW_CARINFO = [
  {
    id: 'new',
    name: 'McLaren Artura ass',
    price: '320',
    seats: '2',
    power: '671',
    engine: '3',
    image: [],
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
        const image = URL.createObjectURL(files[i]);
        newImage.push(image);
      }

      if (idCar === 'new') {
        setNewCar(prev => {
          return [{ ...prev[0], image: newImage }];
        });
      } else {
        // зміна машин
        console.log('зміна машин');

        const addImagesCar = rows.find(car => car.id === idCar);
        const newCar = transformBrandID(addImagesCar, brands);

        const formData = new FormData();

        formData.append('id', newCar.id);

        for (let index = 0; index < files.length; index++) {
          formData.append('image', files[index]);
        }
        // push
        await axios.patch(`/api/admin/carlist`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
    };

    setColumns(() => newColumns({ brands, handleAddImage }));
  }, [brands, rows]);

  useEffect(() => {
    (async () => {
      const result = await axios(`/api/admin/${params}`);
      const resultBrand = await axios(`/api/brand`);
      setBrands(resultBrand.data);

      const newData = result.data.map(item => {
        const matchingBrand = resultBrand.data.find(
          brand => brand.id === item.carBrand
        );
        return {
          ...item,
          carBrand: matchingBrand ? matchingBrand.name : item.carBrand,
        };
      });

      setRows(newData);
    })();
  }, [params]);

  const handleProcessRowUpdate = async updatedRow => {
    const newCar = transformBrandID(updatedRow, brands);

    // push
    await axios.patch(`/api/carlist`, newCar);
  };
  const handleProcessRowUpdateError = err => {};
  if (!rows) {
    return <h1>Loading</h1>;
  }

  const handleAddNewCar = async updatedRow => {
    const newCar = transformBrandID(updatedRow[0], brands);
    const { id, image, ...car } = newCar;

    const formData = new FormData();

    for (let index = 0; index < image.length; index++) {
      formData.append('image', image[index]);
    }

    for (const property in car) {
      formData.append(property, car[property]);
    }

    // push
    await axios.post(`/api/admin/carlist`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          className="tablet"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
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
      <Button onClick={() => handleAddNewCar(newCar)}>Add new car</Button>
    </div>
  );
}
