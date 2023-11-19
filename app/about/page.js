import Container from '@/app/_componets/Container/Container';
import BreadcrumbsCustl from '@/app/_componets/Breadcrumbs/Breadcrumbs';
import { Box } from '@mui/material';

const page = () => {
  return (
    <>
      <Box sx={{ p: '140px 0' }}>
        <Container>
          <BreadcrumbsCustl />
        </Container>
      </Box>
    </>
  );
};

export default page;
