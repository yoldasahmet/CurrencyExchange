import { Box, Stack } from '@mui/material';
import React, { ReactElement } from 'react';

import Label from '../../primitives/label/Label';

const ConverterView = (props: {
  amount?: number;
  result?: number;
  rate: number;
  from: string;
  to: string;
}): ReactElement => {
  const { amount = 0, rate, from, to, result } = props;

  const resultValue =
    result != null
      ? `${result.toFixed(3)} ${to}`
      : `${(amount * rate)?.toFixed(3)} ${to}`;

  return rate != null && rate > 0 ? (
    <Box mt={8} mb={5}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Label variant="h3" text={`${amount} ${from} =`} gap={0} />

        <Label
          variant="h3"
          text={resultValue}
          textColor={'accent.main'}
          gap={0}
          bold
        />
      </Stack>

      <Stack mt={3} justifyContent="center" alignItems="center">
        <Label
          variant="body2"
          text={`1 ${from} = ${rate.toFixed(6)} ${to}`}
          gap={0}
        />

        <Label
          variant="body2"
          text={`1 ${to} = ${(1 / rate).toFixed(6)} ${from}`}
          gap={0}
        />
      </Stack>
    </Box>
  ) : (
    <></>
  );
};

export default ConverterView;
