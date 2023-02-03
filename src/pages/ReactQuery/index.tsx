import { PageContainer } from '@ant-design/pro-components';
import { actions } from '@/utils/action';
import React from 'react';
import { useQuery } from '@umijs/max';

const Example: React.FC = () => {
  const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
      (res) => res.json(),
    ),
  );

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        {'An error has occurred: ' +
          (typeof error === 'object' && 'message' in error
            ? error.message
            : error)}
      </div>
    );

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

const ReactQueryDemo: React.FC = () => {
  actions.onGlobalStateChange((state: any) => {
    console.log('[umi]', state);
    console.log('');
  }, true);

  const changeStateMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    actions.setGlobalState({ message: event.target.value });
  };

  return (
    <PageContainer
      ghost
      header={{
        title: 'React Query Demo',
      }}
    >
      <input onChange={changeStateMessage}></input>
      <Example />
      <Example />
      <Example />
    </PageContainer>
  );
};

export default ReactQueryDemo;
