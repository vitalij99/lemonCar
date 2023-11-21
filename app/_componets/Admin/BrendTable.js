'use client';

import { newColumnsBrand } from '@/lib/columns';
import { ThemeProvider, createTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const BrendTable = () => {
  const [brands, setBrands] = useState(null);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    (async () => {
      const resultBrands = await axios(`/api/brand`);
      setBrands(resultBrands.data);
    })();
  }, []);

  useEffect(() => {
    setColumns(() => newColumnsBrand());
  }, []);

  const handleProcessRowUpdate = async updatedRow => {
    // push
    // await axios.patch(`/api/carlist`, newCar);
  };
  const handleProcessRowUpdateError = err => {};
  if (!brands) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            className="tablet"
            rows={brands}
            columns={columns}
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
        {/* <h1>ADD new</h1>
        <DataGrid
          className="tablet"
          rows={newBrands}
          columns={columns}
          processRowUpdate={(updatedRow, originalRow) => {
            setNewCar([{ ...updatedRow }]);
          }}
          hideFooter={true}
          onProcessRowUpdateError={handleProcessRowUpdateError}
        />
        <Button onClick={handleAddNewCar}>Add new car</Button> */}
      </ThemeProvider>
    </div>
  );
};

export default BrendTable;
