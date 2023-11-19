import Container from '@/app/_componets/Container/Container';
import BreadcrumbsCustl from '@/app/_componets/Breadcrumbs/Breadcrumbs';
import { Box, Typography } from '@mui/material';

import styleTitle from '@/app/styles/carlist.module.scss';
import ListText from '@/app/_componets/ListText/ListText';
import Available from '@/app/_componets/Available/Available';
import Contact from '@/app/_componets/Contact/Contact';

const CHOOSE_LIST = [
  {
    title: 'FREECAR DELIVERY',
    text: ' We will deliver the car directly to your location in Dubai',
  },
  {
    title: 'EXPERIENCEDDRIVERS',
    text: `Don’t have a driver? Don’t worry, we have many experienced drivers for
          you.`,
  },
  {
    title: 'TECHNICAL SUPPORT',
    text: 'Have a question? Contact support when you have a problem.',
  },
];

const page = () => {
  return (
    <>
      <Box sx={{ p: '140px 10px' }}>
        <Container>
          <Box sx={{ display: 'flex' }}>
            <Box>
              <BreadcrumbsCustl />
              <h1 className={styleTitle.title}>About Us</h1>
              <Typography sx={{ width: '70%' }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus.
              </Typography>
            </Box>
            <ListText list={CHOOSE_LIST} />
          </Box>
          <Available />
          <Contact />
        </Container>
      </Box>
    </>
  );
};

export default page;
