import { useMemo, useState } from 'react';
import Link from 'next/link';

import { MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const pages = ['Carlist', 'Brand'];

export default function PrimarySearchAppBar({ data }) {
  const [unRead, setUnRead] = useState(0);
  useMemo(() => {
    let searchUnRead = 0;
    for (let index = 0; index < data.length; index++) {
      if (data[index].checkRead === false) {
        searchUnRead += 1;
      }
    }
    setUnRead(searchUnRead);
  }, [data]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {pages.map(page => (
            <MenuItem key={page}>
              <Link href={`/admin/${page.toLowerCase()}`}>{page}</Link>
            </MenuItem>
          ))}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={unRead} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
