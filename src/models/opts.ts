// 全局共享数据示例
import { useState } from 'react';

const useOpts = () => {
  const [opts, setOpts] = useState<any>({});
  return {
    opts,
    setOpts,
  };
};

export default useOpts;
