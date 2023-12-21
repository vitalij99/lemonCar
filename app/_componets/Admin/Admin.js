import Form from '@/app/admin/form/Form';

import ResponsiveAppBar from '../Appbar/Appbar';
import { Box } from '@mui/material';
import { cookies } from 'next/headers';

const Admin = () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get('token');
  const token = cookie ? cookie.value : null;

  return <Box sx={{ mt: 20 }}>{!token ? <Form /> : <ResponsiveAppBar />}</Box>;
};

export default Admin;
