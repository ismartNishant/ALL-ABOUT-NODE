const http = require("http");
const fs = require("fs");
//-------basic request made
// const server = http.createServer((req,res) => {
//     console.log(req);
//     console.log(req.headers, req.url, req.method)

//     console.log("request is made");
// })

// server.listen(3000, "localhost", () =>{
//     console.log("server is listning on port number 3000")
// })

///------------------request and response---------
// const server = http.createServer((req, res) => {
//   console.log("request is made");
//sending plain rext as response
//   //  res.setHeader("Content-Type", "text/plain");
//   // res.write("Hi Nishant");

//---------- sending html element as response///
//   res.setHeader("Content-Type", "text/html");

//   res.write('<head ><linl rel="stylesheet" href="#"> </head>');

//   res.write("<h1>Hi Nishant</h1>");

//   res.end();
// });

// server.listen(3000, "localhost", () => {
//   console.log("server is listning on port number 3000");
// });

//------------------sending html file as a response
// const server = http.createServer((req,res) => {

//     fs.readFile("./views/index.html" ,(err,data) => {
//         if(err){
//             console.log(err);
//             res.end()
//         }
//         res.write(data);
//         res.end();
//         // res.end(data); if only one file or data
//     })

// })

// server.listen(3000, "localhost", () => {
//   console.log("server is listning on port number 3000");
// });

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location","/about");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;

  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.write(data);
    res.end();
    // res.end(data); if only one file or data
  });
});

server.listen(3000, "localhost", () => {
  console.log("server is listning on port number 3000");
});
