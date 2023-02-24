import { PageContainer } from '@ant-design/pro-components';
import { useSearchParams } from '@umijs/max';
import React from 'react';

const Policy: React.FC = () => {
  const [searchParams] = useSearchParams();
  const itntCode = searchParams.get('itntCode');
  console.log(itntCode);

  return (
    <PageContainer ghost>
      <div>{searchParams.toString()}</div>
    </PageContainer>
  );
};

export default Policy;
