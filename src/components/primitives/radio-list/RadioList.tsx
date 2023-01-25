import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { ChangeEvent, ReactElement, useState } from 'react';

const RadioList = (props: {
  items: string[];
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}): ReactElement => {
  const { items, onChange } = props;

  const [selectedItem, setselectedItem] = useState(
    items?.length > 0 ? items[0] : ''
  );

  return (
    <>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={selectedItem}
          onChange={onChange}
          sx={{ marginTop: 3 }}
        >
          {items.map((item) => {
            return (
              <FormControlLabel
                key={item}
                value={item}
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: 16,
                  },
                }}
                control={
                  <Radio
                    size="small"
                    checked={selectedItem === item}
                    onChange={(e) => {
                      setselectedItem(e.target.value);
                    }}
                    value={item}
                    name="radio-buttons"
                  />
                }
                label={item}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioList;
