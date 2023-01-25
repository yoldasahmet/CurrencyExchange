import { CircularProgress, Box } from '@mui/material';
import React, { ReactElement } from 'react';

const ProgressPage = (): ReactElement => {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <CircularProgress />
    </Box>
  );
};

export default ProgressPage;
