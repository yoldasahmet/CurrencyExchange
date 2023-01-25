import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from '../../components/composites/header/PageHeader';

const pages = [
  { id: 'currency-converter', text: 'CURRENCY CONVERTER', path: '/' },
  {
    id: 'conversion-history',
    text: 'VIEW CONVERSION HISTORY',
    path: '/conversion-history',
  },
];

const AppLayout = (): ReactElement => {
  return (
    <>
      <PageHeader links={pages} />
      <Outlet />
    </>
  );
};

export default AppLayout;
