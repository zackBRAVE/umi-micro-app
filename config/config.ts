import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  qiankun: {
    slave: {},
  },
  reactQuery: {},
  layout: {
    title: 'SeaInsure',
    layout: 'sidemenu',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: false,
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: 'React Query Demo',
      path: '/react-query',
      component: './ReactQuery',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'Policy',
      path: '/policy',
      component: './Policy',
    },
    {
      name: 'Quote',
      path: '/pa/quote/continue/:itntCode/:prdtCode/:productVersion/:bizType/:policyId',
      component: './Quote',
    },
  ],
  npmClient: 'pnpm',
});
