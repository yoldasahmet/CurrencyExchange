import Typography from '@mui/material/Typography';
import React, { ReactElement } from 'react';

type VariantTypes =
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'
  | undefined;

const Label = (props: {
  text: string;
  variant?: VariantTypes;
  textColor?: string;
  bold?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  gap?: number;
}): ReactElement => {
  const {
    text,
    onClick,
    variant = 'body1',
    textColor = 'defaultText.main',
    bold = false,
    gap = 1,
  } = props;
  return (
    <Typography
      variant={variant}
      sx={{
        mb: gap,
        color: textColor,
        letterSpacing: 1,
        fontWeight: bold ? 'bold' : 'normal',
      }}
      onClick={onClick}
    >
      {text}
    </Typography>
  );
};

export default Label;
