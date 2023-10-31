'use client';
import { newColumnsMessage } from '@/lib/columns';
import { useFetcher } from '@/lib/fetcher';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { mutate } from 'swr';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Message = () => {
  const { data, error, isLoading } = useFetcher('/api/swr');

  const handleDeleteMessage = async event => {
    const idMessage = event.target.dataset.id;

    await axios.patch(`/api/swr/`, { id: idMessage });
    mutate('/api/swr');
  };

  const handleProcessRowUpdate = async updatedRow => {
    // push
  };
  const handleProcessRowUpdateError = err => {};
  return (
    <div>
      <ThemeProvider theme={theme}>
        {data && (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              className="tablet"
              rows={data}
              columns={newColumnsMessage({ handleDeleteMessage })}
              getRowHeight={() => 'auto'}
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
        )}
      </ThemeProvider>
    </div>
  );
};

export default Message;
