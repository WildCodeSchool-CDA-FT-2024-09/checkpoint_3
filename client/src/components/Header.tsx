// import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%" color="pink">
          <Typography variant="h4" component="h1" gutterBottom>
            Checkpoint : frontend
          </Typography>
          <Typography variant="subtitle1" component="p">
            Countries
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
