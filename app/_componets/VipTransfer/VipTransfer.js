import { getVipTransfer } from '@/lib/getVipTransfer';
import { Box } from '@mui/material';
import Container from '../Container/Container';
import Image from 'next/image';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const VipTransfer = async () => {
  const transfers = await getVipTransfer();
  return (
    <Box>
      <Container>
        <Grid2 container spacing={2}>
          {transfers.map((transfer, index) => (
            <Grid2 key={index} xs={{ width: '400px' }}>
              <Image src={transfer.foto} width={400} height={500} alt="foto" />
              <Box
                sx={{
                  p: '15px',
                  border: '2px solid var(--text)',
                  borderTop: 'none',
                  borderRadius: '0 0 20px 20px',
                }}
              >
                <h3>Name: {transfer.name}</h3>
                <h4>Age: {transfer.age}</h4>
                <p>Description: {transfer.description}</p>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default VipTransfer;
