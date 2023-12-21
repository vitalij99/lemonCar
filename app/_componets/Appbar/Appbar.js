'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useFetcher } from '@/lib/fetcher';

import { Button, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/navigation';

const pages = ['Carlist', 'Brand', 'Viptransfer'];

export default function PrimarySearchAppBar() {
  const { data, error, isLoading } = useFetcher('/api/swr');
  const [unRead, setUnRead] = useState(0);
  const router = useRouter();

  useMemo(() => {
    if (!data) {
      return;
    }

    setUnRead(data.filter(item => item.checkRead === false).length);
  }, [data]);

  const handleExit = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    router.refresh();
  };

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
            <Link href={`/admin/message`}>
              <Badge badgeContent={unRead} color="error">
                <MailIcon />
              </Badge>
            </Link>
          </Box>
          <MenuItem>
            <Button variant="Outlined" onClick={handleExit}>
              Exit
            </Button>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
