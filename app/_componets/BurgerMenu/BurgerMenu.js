'use client';
import {
  Backdrop,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const BurgerMenu = ({ list, className }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={className}>
      <IconButton onClick={handleOpen} aria-label="menu">
        <MenuIcon fontSize="large" sx={{ color: '#fff' }} />
      </IconButton>
      {open && (
        <Backdrop
          sx={{ color: '#fff', zIndex: 3 }}
          open={open}
          onClick={handleClose}
        >
          <List>
            <ListItem>
              <Button sx={{ m: '0 auto' }} variant="contained">
                <Link href="/" color="#fff" underline="none">
                  Home
                </Link>
              </Button>
            </ListItem>
            {list.map((nav, index) => {
              return (
                <ListItem key={index}>
                  <Button sx={{ m: '0 auto' }} variant="contained">
                    <Link href={nav.link} color="#fff" underline="none">
                      {nav.name}
                    </Link>
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Backdrop>
      )}
    </div>
  );
};

export default BurgerMenu;
