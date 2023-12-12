const fs = require("fs");

const readStream = fs.createReadStream("./docs/msg.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/msg1.txt");


//reading chunk is string format anddding to msg1.txt
// readStream.on("data", (chunk) => {
//   console.log("---------------NEW CHUNK---------------");
//   console.log(chunk);
//   writeStream.write("\n ----------------------NEW CHUNK--------------------\n");
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);