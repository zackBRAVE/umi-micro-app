import { defineConfig } from '@umijs/max';

const devServerPort = 3001;

export default defineConfig({
  publicPath: `http://localhost:${devServerPort}/`,
  define: {
    'process.env': {
      SOCKET_SERVER: `http://localhost:${devServerPort}`,
      BASE_URL: `http://localhost:${devServerPort}`,
    },
  },
});
