import React from 'react';
import './App.css';

import { CssBaseline, Grid, Typography, Button, AppBar, Toolbar } from '@mui/material';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

// https://www.youtube.com/watch?v=PKwu15ldZ7k

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <AccessAlarmsIcon />
          <Typography sx={{ ml: '20px' }} variant='h6'>siema</Typography>
        </Toolbar>
      </AppBar>
      <Grid width='100px' display='flex' align='center' direction='column' sx={{ mt: '100px', ml: '300px' }}>
        <Button color='primary' size='large' variant='contained'>CONTACT</Button>
        <Button color='secondary' size='large' variant='contained'>siemano</Button>
        <Button color='success' size='large' variant='contained'>ok</Button>
        <Button color='error' size='large' variant='contained'>no</Button>
        <Button color='warning' size='large' variant='contained'>warning</Button>
      </Grid>
    </>
  );
}

export default App;
