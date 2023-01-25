import Button from '@mui/material/Button';
import React, { ReactElement, useCallback, useEffect } from 'react';
import DataTable from '../../components/composites/data-table/DataTable';
import { useTypedDispatch, useTypedSelector } from '../../state/store';
import PageContainer from '../base/PageContainer';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeHistory } from '../../state/slices/history/HistorySlice';
import { NavigateOptions, useNavigate } from 'react-router-dom';
import { resetParams } from '../../state/slices/converter/ConverterSlice';

const ConversionHistoryPage = (): React.ReactElement => {
  const rateHistoryState = useTypedSelector((state) => state.rateHistory);
  const { list } = rateHistoryState;
  const dispatch = useTypedDispatch();

  const navigate = useNavigate();

  const routePath = (path: string, params: NavigateOptions): void => {
    navigate(path, params);
  };

  useEffect(() => {
    dispatch(resetParams());
  }, []);

  const deleteLinkHandler = useCallback(
    (row: any) => dispatch(removeHistory(row.id)),
    []
  );

  return (
    <PageContainer contentTitle="Conversion history">
      <DataTable
        className="history-table"
        data={list}
        idkey={'id'}
        columns={['Date', 'Event', 'Actions', '']}
        datakeys={[
          'datetime',
          'event',
          (rowData: any): ReactElement => (
            <Button
              className="linkrow"
              color="primary"
              size="small"
              variant="text"
              onClick={() => {
                routePath(`/`, { state: { ...rowData } });
              }}
              startIcon={<RemoveRedEyeIcon />}
              sx={{ textTransform: 'none' }}
            >
              View
            </Button>
          ),
          (rowData: any): ReactElement => (
            <Button
              className="linkrow"
              color="error"
              size="small"
              variant="text"
              startIcon={<DeleteForeverIcon />}
              sx={{ textTransform: 'none' }}
              onClick={(): void => {
                deleteLinkHandler(rowData);
              }}
            >
              Delete from history
            </Button>
          ),
        ]}
      />
    </PageContainer>
  );
};

export default ConversionHistoryPage;
