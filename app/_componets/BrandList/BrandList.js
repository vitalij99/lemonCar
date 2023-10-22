import { getBrand } from '@/lib/getBrand';
import { Box, Link, List, ListItem } from '@mui/material';

import React from 'react';

const BrandList = async () => {
  const brands = await getBrand();

  return (
    <Box>
      {brands && (
        <List sx={{ display: 'flex', justifyContent: 'center' }}>
          <ListItem sx={{ maxWidth: '100px' }}>
            <Link sx={{ p: '20px' }} href={`/carlist`}>
              All
            </Link>
          </ListItem>

          {brands.map((brand, i) => (
            <ListItem sx={{ width: 'max-content' }} key={i}>
              <Link sx={{ p: '20px' }} href={`/carlist/?search=${brand.id}`}>
                {brand.name}
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default BrandList;
