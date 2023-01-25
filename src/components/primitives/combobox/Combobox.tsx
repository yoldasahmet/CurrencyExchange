import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormHelperText,
} from '@mui/material';
import React, { ReactElement, ReactNode } from 'react';

const Combobox = (props: {
  title: string;
  value: string;
  helperText?: string;
  list: Array<{ key: string; value: any }>;
  onChange?: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}): ReactElement => {
  const { title, value, helperText, list = [], onChange } = props;
  return (
    <FormControl variant="standard" fullWidth size="small">
      <InputLabel id="simple-select-label">{title}</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={value}
        label={title}
        onChange={onChange}
      >
        {list.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
      {<FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Combobox;
