const connect = require('connect');
const serveStatic = require('serve-static');
const path = require("path");
const PORT = 3000;
connect().use(serveStatic(path.join(__dirname, "../../dist"))).listen(PORT, function(){
  console.log("Server running on 'http://127.0.0.1:" + PORT +"'");
});