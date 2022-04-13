import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box } from '@mui/material';

import Hero from '../Hero';

const SinglePageLayout = ({ children }) => {
  return (
    <>
      <Hero />
      <Container role="main">
        <Box sx={{ py: 12 }}>{children}</Box>
      </Container>
    </>
  );
};

SinglePageLayout.propTypes = {
  children: PropTypes.node,
};

export default SinglePageLayout;
