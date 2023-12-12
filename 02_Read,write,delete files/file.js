const { isUtf8 } = require("buffer");
const fs = require("fs");

//-----------reading a file
// fs.readFile("./docs/msg.txt",(err, data) => {
//    if(err){
//     console.log(err);
//    }
//    console.log(data);
//    console.log(data.toString());
// })

//-------------writing a file
// fs.writeFile("./docs/msg1.txt", "Hi Lisa manoabn this side", () => {
//   console.log("testis  added");
// });

//----------------directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//-----------deleting a file
if (fs.existsSync("./docs/msg.txt")) {
  fs.unlink("./docs/msg.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
