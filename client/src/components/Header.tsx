// import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#CD2A63' }}>
      <Toolbar>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
          <Typography variant="h4" component="h1" gutterBottom>
            Checkpoint 3 : frontend
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
