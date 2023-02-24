import React from 'react';

type LinkProps = React.PropsWithChildren<{
  data?: any | null;
  to: string;
}>;

function LinkMain({ data, to, children }: LinkProps) {
  const jumpToMain = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState(data, '', to);
  };

  return <a onClick={jumpToMain}>{children}</a>;
}

export { LinkMain };
