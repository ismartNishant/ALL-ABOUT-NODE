

const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs"); //by default it will look is current folder
app.set("views", "./views/myviews"); //so express will find your views on myviews folder

app.listen(3000);

app.use(express.static('public'));

const dburl ="mongodb+srv://nishant:nishant11@nodetutes.3z5ngvc.mongodb.net/"

// Serve static files from the 'public' folder
app.use( (req, res, next) => {
  console.log("hi nancy");
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Hi there nishant this side",
      snippet: "lorem ispum dores emcat lakodisum",
    },
    {
      title: "Hola amigo kese ho",
      snippet: "lorem ispum dores emcat lakodisum",
    },
    {
      title: "Samaj me aaya kya",
      snippet: "lorem ispum dores emcat lakodisum",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New" });
});

//for every request it will send file
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
