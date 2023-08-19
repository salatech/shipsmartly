const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.shipsmartlyservices.com',
      changeOrigin: true,
    })
  );
};
