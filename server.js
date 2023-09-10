const http = require('http');
require('./config/dbConnect');
const app = require("./app/app.js");

const PORT= process.env.PORT || 8000;

// console.log(app);
const server = http.createServer(app)


server.listen(PORT, console.log(`Server listening to port ${PORT}`));