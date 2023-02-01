const http=require('http');
const app =require('./server');
const server =http.createServer(app);
require("dotenv").config();
const PORT=process.env.PORT

server.listen(PORT,console.log(`app is running on http://localhost:${PORT}`));