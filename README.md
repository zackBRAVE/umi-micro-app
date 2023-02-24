# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

### 微前端相关介绍

Umi 子应用，请确保启动端口为 3001

启动主应用步骤：

1. 拉取 BO 项目中 feature_v1.24.0_mfe_new 分支
2. 安装依赖并启动（以 3000 端口启动）
3. 登录后可以通过点击首页中 Umi App 来跳转到该子应用（前提是子应用已启动）
4. 也可以在创建子保单时跳转到该子应用的 Quote 页面（仅作示例），并读取 url 中相关参数

注意事项：

1. 子应用中定义 Action 类用于与主应用通信，且双方可以监听到相关变化，具体请看实现/src/utils/action.ts（仅作示例，非最终实现方式，简单参数可通过 props 传入子应用）
2. 主应用中关于子应用的配置可查看/src/MicroApp.tsx
3. 主应用中的具体变更处可查看 commit 信息
4. 考虑到子应用和主应用在样式上的一致性，关闭 qiankun 提供的样式隔离，推荐只对子应用中的相关样式进行隔离（可通过 auto-prefixer 等方式实现）
