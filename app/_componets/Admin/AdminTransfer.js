'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { newColumnsTransfer } from '@/lib/columns';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AdminTransfer = () => {
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState([]);
  const [newTransver, setNewTransver] = useState([]);

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
      const { data } = await axios(`/api/viptransfer`);
      setRows(data);
    }
  };
  const handleDelete = async id => {
    await axios.delete(`/api/admin/viptransfer?id=${id}`);
    const { data } = await axios(`/api/viptransfer`);
    setRows(data);
  };

  const handleAddNewTransfer = async () => {
    const { imageFile, name } = newTransver[0];
    const formData = new FormData();

    formData.append('foto', imageFile);
    formData.append('name', name);

    const { data } = await axios.post(`/api/admin/viptransfer`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    rows(prev => [...prev, data]);
  };

  const handleProcessRowUpdateError = err => {};
  if (!rows) {
    return <h1>Loading</h1>;
  }
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
          hideFooter={true}
          onProcessRowUpdateError={handleProcessRowUpdateError}
        />
        <Button onClick={handleAddNewTransfer}>Add new Transver</Button>
      </ThemeProvider>
    </div>
  );
};

export default AdminTransfer;
