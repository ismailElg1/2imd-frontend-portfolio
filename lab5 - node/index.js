// const cowsay = require('cowsay');

// console.log(cowsay.say({
//     text: "Nodejs, lets doooo this!",
// }));

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     switch(req.url){
//         case "/signup":
//             case "/singup": 
//                 res.end('This is the signup page!');
//             break;

//             default: 
//                 res.end("Hello World");
//     }
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')

  app.get('api/v1/todos', (req, res) => {
    res.send("get todos");
  });

  // GET api/v1/todos
  // POST api/v1/todos
  // PUT api/v1/todos/3
  // DEL api/v1/todos/3
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})