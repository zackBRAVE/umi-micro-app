// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: unknown) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: unknown) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: unknown) {
    console.log('app1 unmount', props);
  },
};
