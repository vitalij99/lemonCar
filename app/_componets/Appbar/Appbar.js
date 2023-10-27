import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Badge from '@mui/material/Badge';

import MailIcon from '@mui/icons-material/Mail';
import { MenuItem } from '@mui/material';
import Link from 'next/link';

const pages = ['Carlist', 'Brand'];

export default function PrimarySearchAppBar({ badgeMessage }) {
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
              <Badge badgeContent={badgeMessage} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
