'use client';
import './adminTable.scss';

import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AdminTable({ params }) {
  const [rows, setRows] = useState(null);
  const [brands, setBrands] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
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
      { field: 'prise', editable: true, headerName: 'Prise', minWidth: 100 },
      { field: 'seats', editable: true, headerName: 'Seats', minWidth: 100 },
      {
        field: 'image',
        editable: true,
        headerName: 'Image',
        minWidth: 40,
        renderCell: params => {
          return (
            <Image src={params.row.image} alt="avatar" width={40} height={40} />
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

  const handleProcessRowUpdate = updatedRow => {
    const idBrand = brands.find(brand => {
      return brand.name === updatedRow.carBrand;
    });

    const newCar = { ...updatedRow, carBrand: idBrand.id };

    // push
    console.log(newCar);
  };
  const handleProcessRowUpdateError = err => {
    console.log(err);
  };
  if (!rows) {
    return <h1>Loading</h1>;
  }
  return (
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
  );
}
