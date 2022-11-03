require('./blog.model');
const controller = require('./blog.controller');
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({
      status: "ok"
    })
  });
  app.post('/blog', controller.createBlog)
  app.get('/blog', controller.getBlogs)
}