const { createServer } = require('vite');
let vite;
export const createVite = async () => {
  if (!vite) {
    vite = await createServer({
      server: {
        middlewareMode: 'html',
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
      },
    });
  }
  return vite;
};
