import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { ReactElement } from 'react';

const DataTable = (props: {
  idkey: string;
  data: any[];
  datakeys: Array<string | any>;
  columns: string[];
  className?: string | undefined;
}): ReactElement => {
  const { idkey, datakeys, data, columns, className } = props;

  return (
    <>
      <TableContainer component={Paper} className={className}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((col, index) => (
                <TableCell key={index}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((row) => (
                <TableRow
                  key={row[idkey]}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  {datakeys.map((dk, index) => (
                    <TableCell key={`${String(row[idkey])}_${index}`}>
                      {typeof dk === 'string' ? row[dk] : dk(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell>No item</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
