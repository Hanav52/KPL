const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/auth', {
            target: 'http://35.89.73.172:3000/',
            changeOrigin: true
        })
)
};