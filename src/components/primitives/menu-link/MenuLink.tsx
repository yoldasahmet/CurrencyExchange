import { Box, Button } from '@mui/material';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentPath } from '../../../hooks/location/PathHooks';
import menuLinkStyles from './MenuLinkStyles';

const MenuLink = (props: {
  id: string;
  text: string;
  path: string;
}): ReactElement => {
  const { id, text, path } = props;
  const styles = menuLinkStyles();

  const currentPath = useCurrentPath();
  const navigate = useNavigate();

  const routePath = (): void => {
    navigate(path);
  };

  return (
    <Box
      key={`box-${id}`}
      sx={currentPath === path ? styles.containerActive : styles.container}
    >
      <Button
        id={`btn-${id}`}
        key={`btn-${id}`}
        onClick={routePath}
        sx={styles.link}
      >
        {text}
      </Button>
    </Box>
  );
};

export default MenuLink;
