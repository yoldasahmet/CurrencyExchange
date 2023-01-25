import React, { ReactElement } from 'react';
import PageContainer from '../base/PageContainer';

const ErrorPage = (): ReactElement => {
  return (
    <PageContainer contentTitle="No page">
      <div>
        <span>Go to home page</span>
      </div>
    </PageContainer>
  );
};

export default ErrorPage;
