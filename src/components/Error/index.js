import React from 'react';
import ErrorImage from './ErrorImage';
import SinglePageLayout from '../SinglePageLayout';
import { Box, Grid } from '@mui/material';

const Error = () => {
  return (
    <SinglePageLayout>
      <Box sx={{ mb: 8 }}>
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <ErrorImage />
          </Grid>
          <Grid item>
            <h2>Ocurrió un error</h2>
            <p>Por favor vuelve a intentarlo.</p>
          </Grid>
        </Grid>
      </Box>
    </SinglePageLayout>
  );
};

export default Error;
