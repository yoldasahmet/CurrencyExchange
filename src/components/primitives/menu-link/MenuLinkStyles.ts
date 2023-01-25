import { SxProps, Theme } from '@mui/system';

const menuLinkStyles = (): {
  container: SxProps<Theme>;
  containerActive: SxProps<Theme>;
  link: SxProps<Theme>;
} => {
  const containerCommonStyle = {
    borderBottom: '3px solid',
    '&:hover': {
      borderBottom: '3px solid',
      borderBottomColor: 'primary.main',
    },
  };

  return {
    container: {
      ...containerCommonStyle,
      borderBottomColor: 'white',
    },
    containerActive: {
      ...containerCommonStyle,
      borderBottomColor: 'primary.main',
    },
    link: {
      py: 2.5,
      color: 'black',
      display: 'block',
    },
  };
};

export default menuLinkStyles;
