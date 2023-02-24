import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import React from 'react';

const Quote: React.FC = () => {
  const { itntCode, prdtCode: productCode, ...restParams } = useParams();
  console.log(itntCode, productCode, restParams);

  return (
    <PageContainer ghost>
      <div>itntCode: {itntCode}</div>
      <div>productCode: {productCode}</div>
      <div>{JSON.stringify(restParams)}</div>
    </PageContainer>
  );
};

export default Quote;
