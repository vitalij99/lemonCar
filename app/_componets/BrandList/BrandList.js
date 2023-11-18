import { getBrand } from '@/lib/getBrand';
import { Box, Link, List, ListItem } from '@mui/material';

import React from 'react';

const ALL_BRANDS = { id: '', name: 'All' };

const BrandList = async () => {
  const brands = await getBrand();
  brands.unshift(ALL_BRANDS);
  return (
    <Box>
      {brands && (
        <List
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {brands.map((brand, i) => (
            <ListItem sx={{ width: 'max-content' }} key={i}>
              <Link
                sx={{ p: '20px', color: 'var(--text)', fontSize: '20px' }}
                href={brand.id ? `/carlist/?search=${brand.id}` : `/carlist`}
                underline="false"
              >
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
