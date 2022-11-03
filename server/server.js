const config = require('./src/config')
const { expressApp, httpServer } = require('./src/express');
const { connect } = require('./src/db')
const routes = require('./src/blog.routes');

  (async function start () {
    await connect();
    const app = await expressApp();
    await httpServer(app);
    routes(app);
  })();

