import AdminTable from '@/app/_componets/Admin/AdminTable';
import React from 'react';

const page = ({ params }) => {
  return (
    <div>
      <AdminTable params={params.item} />
    </div>
  );
};

export default page;
