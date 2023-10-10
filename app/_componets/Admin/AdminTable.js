'use client';
import '@/app/styles/adminTable.scss';

import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

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
const handleAddImage = event => {
  console.log('ssss');
  const idCar = event.target.dataset.id;
  const files = event.target.files;
  console.dir(idCar);
  console.log(files);

  if (idCar === 'new') {
    setNewCar(prev => {
      return { ...prev, image: files };
    });
    console.log(newCar);
  } else {
  }
};
export default function AdminTable({ params }) {
  const [rows, setRows] = useState(null);
  const [brands, setBrands] = useState([]);
  const [columns, setColumns] = useState([]);
  const [newCar, setNewCar] = useState(NEW_CARINFO);

  useEffect(() => {
    const handleAddImage = event => {
      const idCar = event.target.dataset.id;
      const files = event.target.files;

      if (idCar === 'new') {
        setNewCar(prev => {
          return [{ ...prev[0], image: files }];
        });
      } else {
        // зміна машин
      }
    };
    const newColumns = [
      { field: 'name', editable: true, headerName: 'Name', minWidth: 170 },
      {
        field: 'carBrand',
        editable: true,
        headerName: 'Brand',
        type: 'singleSelect',
        valueOptions: () => {
          return brands.map(brand => brand.name);
        },
        minWidth: 100,
      },
      { field: 'engine', editable: true, headerName: 'Engine', minWidth: 100 },
      { field: 'power', editable: true, headerName: 'Power', minWidth: 100 },
      { field: 'price', editable: true, headerName: 'Price', minWidth: 100 },
      { field: 'seats', editable: true, headerName: 'Seats', minWidth: 60 },
      { field: 'drive', editable: true, headerName: 'Drive', minWidth: 100 },
      {
        field: 'acceleration',
        editable: true,
        headerName: 'Acceleration',
        minWidth: 100,
      },
      { field: 'type', editable: true, headerName: 'Type', minWidth: 100 },
      {
        field: 'addImage',
        headerName: 'addImage',
        editable: true,
        minWidth: 150,
        renderCell: params => {
          return (
            <div>
              <Button component="label" variant="contained">
                Upload file
                <input
                  data-id={params.row.id}
                  className="fileUpload"
                  type="file"
                  multiple
                  onChange={handleAddImage}
                />
              </Button>
            </div>
          );
        },
      },

      {
        field: 'image',
        editable: true,
        headerName: 'Image',
        minWidth: 40,
        renderCell: params => {
          return (
            <div>
              {Array.isArray(params.row.image) &&
                params.row.image.map((elem, i) => {
                  return (
                    <Image
                      key={elem + i}
                      src={elem}
                      alt="avatar"
                      width={40}
                      height={40}
                    />
                  );
                })}
            </div>
          );
        },
      },
      { field: 'id', minWidth: 50 },
    ];
    setColumns(newColumns);
  }, [brands]);

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
    console.log(image);
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
