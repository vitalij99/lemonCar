'use client';

import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

import './adminTable.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'name', editable: true, headerName: 'Name', minWidth: 170 },
  { field: 'carBrand', editable: true, headerName: 'Brand', minWidth: 100 },
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
];

export default function AdminTable({ params }) {
  const [rows, setRows] = useState(null);
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await axios(`/api/admin/${params}`);
      setRows(result.data);
    })();
  }, [params]);

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
      />
    </div>
  );
}
