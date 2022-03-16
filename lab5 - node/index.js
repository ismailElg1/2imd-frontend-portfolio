// const cowsay = require('cowsay');

// console.log(cowsay.say({
//     text: "Nodejs, lets doooo this!",
// }));

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//     switch(req.url){
//             case "/signup":
//                 res.end('This is the signup page!');
//             break;
//             default: 
//                 res.end("Hello World");
//     }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000
const logger = require('./middleware/logger')

const apiV1TodosRouter = require('./routers/api/v1/todos');

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/v1/todos', apiV1TodosRouter);

 
  // GET api/v1/todos
  // POST api/v1/todos
  // PUT api/v1/todos/3
  // DEL api/v1/todos/3



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})