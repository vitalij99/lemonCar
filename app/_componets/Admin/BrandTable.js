'use client';

import { newColumnsBrand } from '@/lib/columns';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
// brand

const NEW_BRANDINFO = [
  {
    id: 'new',
    name: 'name',
  },
];
const BrandTable = () => {
  const [brands, setBrands] = useState(null);

  const [newBrands, setNewBrands] = useState(NEW_BRANDINFO);

  useEffect(() => {
    (async () => {
      const resultBrands = await axios(`/api/admin/brand`);
      setBrands(resultBrands.data);
    })();
  }, []);

  const handleUpdateImage = async (event, id) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];

    const newImageUrl = URL.createObjectURL(file);

    if (id === 'new') {
      setNewBrands(prev => [
        { ...prev[0], logo: newImageUrl, imageFile: file },
      ]);
    } else {
      const formData = new FormData();
      formData.append('logo', file);
      formData.append('id', id);

      await axios.patch(`/api/admin/brand`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { data } = await axios(`/api/admin/brand`);
      setBrands(data);
    }
  };
  const handleAddNewBrand = async () => {
    const { imageFile, name } = newBrands[0];
    const formData = new FormData();

    formData.append('logo', imageFile);
    formData.append('name', name);

    const { data } = await axios.post(`/api/admin/brand`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setBrands(prev => [...prev, data]);
  };
  const handleDeleteBrand = async id => {
    await axios.delete(`/api/admin/brand?id=${id}`);
    const { data } = await axios(`/api/admin/brand`);
    setBrands(data);
  };
  const handleProcessRowUpdate = async updatedRow => {
    const formData = new FormData();

    formData.append('id', updatedRow.id);
    formData.append('name', updatedRow.name);
    // push
    await axios.patch(`/api/admin/brand`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const handleProcessRowUpdateError = err => {};
  if (!brands) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          className="tablet"
          rows={brands}
          columns={newColumnsBrand({ handleUpdateImage, handleDeleteBrand })}
          getRowHeight={() => 'auto'}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
            columns: {
              ...brands.initialState?.columns,
              columnVisibilityModel: {
                id: false,
              },
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
        rows={newBrands}
        columns={newColumnsBrand({ handleUpdateImage, handleDeleteBrand })}
        hideFooter={true}
        processRowUpdate={updatedRow => {
          setNewBrands([updatedRow]);
        }}
        initialState={{
          columns: {
            ...brands.initialState?.columns,
            columnVisibilityModel: {
              id: false,
              actions: false,
            },
          },
        }}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />
      <Button onClick={handleAddNewBrand}>Add new brand</Button>
    </div>
  );
};

export default BrandTable;
