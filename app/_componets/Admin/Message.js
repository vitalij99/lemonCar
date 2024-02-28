'use client';
import axios from 'axios';
import { mutate } from 'swr';

import { DataGrid } from '@mui/x-data-grid';

import { newColumnsMessage } from '@/lib/columns';
import { useFetcher } from '@/lib/fetcher';
import { useEffect } from 'react';
import { useState } from 'react';

const Message = () => {
  const { data, error, isLoading } = useFetcher('/api/swr');
  const [carList, setCarList] = useState(null);
  const [vipTransfer, setVipTransfer] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await axios(`/api/admin/carlist`);
      const { data } = await axios(`/api/admin/viptransfer`);
      setVipTransfer(data);
      setCarList(result.data);
    })();
  }, []);

  const handleDeleteMessage = async idMessage => {
    await axios.delete(`/api/swr?id=${idMessage}`);

    mutate('/api/swr');
  };

  const handleProcessRowUpdate = async updatedRow => {
    // push

    await axios.patch(`/api/swr/`, updatedRow);

    mutate('/api/swr');
    return updatedRow;
  };
  const handleProcessRowUpdateError = err => {};
  return (
    <div>
      {data && carList && (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            className="tablet"
            rows={data}
            columns={newColumnsMessage({
              handleDeleteMessage,
              carList,
              vipTransfer,
            })}
            getRowHeight={() => 'auto'}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
              columns: {
                ...data.initialState?.columns,
                columnVisibilityModel: {
                  id: false,
                },
              },
              sorting: {
                sortModel: [{ field: 'checkRead', sort: 'asc' }],
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
    </div>
  );
};

export default Message;
