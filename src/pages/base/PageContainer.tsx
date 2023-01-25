import { Box, Container, SxProps, Theme } from '@mui/material';
import React, { ReactElement } from 'react';
import Label from '../../components/primitives/label/Label';

const contentStyle: SxProps<Theme> = {
  backgroundColor: '#f2f2f2',
  height: 'calc(100vh - 166px)',
  flexGrow: 1,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  paddingBottom: 12,
  overflow: 'auto',
};

const PageContainer = (props: {
  contentTitle: string;
  children: ReactElement | ReactElement[];
}): ReactElement => {
  const { contentTitle = '' } = props;
  return (
    <Box sx={contentStyle}>
      <Container maxWidth="xl" sx={{ paddingTop: 5 }}>
        <Label variant="h1" text={contentTitle} gap={4} bold />
        {props.children}
      </Container>
      <div style={{ clear: 'both' }}></div>
    </Box>
  );
};

export default PageContainer;
