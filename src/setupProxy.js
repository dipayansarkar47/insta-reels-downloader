const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    })
  );
};
