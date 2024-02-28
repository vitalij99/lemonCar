'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { newColumnsTransfer } from '@/lib/columns';

const NEW_TRANSFER = [
  {
    id: 'new',
    name: 'name',
    description: '',
    age: 18,
  },
];
const AdminTransfer = () => {
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState([]);
  const [newTransver, setNewTransver] = useState(NEW_TRANSFER);

  useEffect(() => {
    (async () => {
      const { data } = await axios(`/api/admin/viptransfer`);
      setRows(data);
    })();
  }, []);

  useEffect(() => {
    setColumns(() => newColumnsTransfer({ handleUpdateImage, handleDelete }));
  }, []);

  const handleUpdateImage = async (event, id) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];

    const newImageUrl = URL.createObjectURL(file);

    if (id === 'new') {
      setNewTransver(prev => [
        { ...prev[0], foto: newImageUrl, imageFile: file },
      ]);
    } else {
      const formData = new FormData();
      formData.append('foto', file);
      formData.append('id', id);

      await axios.patch(`/api/admin/viptransfer`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { data } = await axios(`/api/admin/viptransfer`);
      setRows(data);
    }
  };
  const handleDelete = async id => {
    await axios.delete(`/api/admin/viptransfer?id=${id}`);
    const { data } = await axios(`/api/admin/viptransfer`);
    setRows(data);
  };

  const handleAddNewTransfer = async () => {
    const { imageFile, foto, ...prev } = newTransver[0];
    const formData = new FormData();

    formData.append('foto', imageFile);

    for (const key in prev) {
      formData.append(key, prev[key]);
    }

    const { data } = await axios.post(`/api/admin/viptransfer`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setRows(prev => [...prev, data]);
  };
  const handleProcessRowUpdate = async updatedRow => {
    const formData = new FormData();
    const { foto, ...prev } = updatedRow;
    for (const key in prev) {
      formData.append(key, prev[key]);
    }

    // push
    await axios.patch(`/api/admin/viptransfer`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  const handleProcessRowUpdateError = err => {};
  if (!rows) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
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
          processRowUpdate={updatedRow => {
            handleProcessRowUpdate(updatedRow);
          }}
          onProcessRowUpdateError={handleProcessRowUpdateError}
        />
      </div>
      <h1>ADD new</h1>
      <DataGrid
        className="tablet"
        rows={newTransver}
        columns={columns}
        processRowUpdate={updatedRow => {
          setNewTransver([{ ...updatedRow }]);
        }}
        initialState={{
          columns: {
            ...rows.initialState?.columns,
            columnVisibilityModel: {
              id: false,
              actions: false,
            },
          },
        }}
        hideFooter={true}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />
      <Button onClick={handleAddNewTransfer}>Add new Transver</Button>
    </div>
  );
};

export default AdminTransfer;
