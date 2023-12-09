import { getVipTransfer } from '@/lib/getVipTransfer';
import { Box, Grid, Typography } from '@mui/material';
import Container from '../Container/Container';
import Image from 'next/image';

const VipTransfer = async () => {
  const transfers = await getVipTransfer();
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          {transfers.map((transfer, index) => (
            <Grid key={index} item xs={{ width: '400px' }}>
              <Image src={transfer.foto} width={400} height={500} alt="foto" />
              <Box
                sx={{
                  p: '15px',
                  border: '2px solid var(--text)',
                  borderTop: 'none',
                  borderRadius: '0 0 20px 20px',
                }}
              >
                <Typography sx={{ fontSize: 30, color: 'var(--text)' }}>
                  Name: {transfer.name}
                </Typography>
                <Typography sx={{ fontSize: 30 }}>
                  Age: {transfer.age}
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  Description: {transfer.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default VipTransfer;
