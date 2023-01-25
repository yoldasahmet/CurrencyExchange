import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import React, { ReactElement } from 'react';
import logoSource from '../../../assets/images/logo.png';
import MenuLink from '../../primitives/menu-link/MenuLink';

const PageHeader = (props: {
  links: Array<{ id: string; text: string; path: string }>;
}): ReactElement => {
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logoSource} height="30" />

          <Box sx={{ flexGrow: 1, display: 'flex', ml: 8 }}>
            {props.links?.map((link) => (
              <MenuLink
                key={link.id}
                id={link.id}
                text={link.text}
                path={link.path}
              />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={() => {
                alert('Not implemented!');
              }}
            >
              Log in
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PageHeader;
