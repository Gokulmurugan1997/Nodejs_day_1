
const express = require("express");
const app = express();
app.use(express.json());
const PORT= process.env.PORT ||3000
//current date and time
const dt = Date.now();
const date_obj = new Date(dt);
const date = date_obj.getDate();
const month = date_obj.getMonth() + 1;
const year = date_obj.getFullYear();
const time = date_obj.getTime();
const fileName = year + "-" + month + "-" + date + "-" + time;


const timestamp = new Date().toISOString();


const fs = require("fs");
fs.writeFile(`${fileName}.txt`, timestamp, function (err) {
  console.log("success");
});

let files = [];
fs.readdir("./", function (err, list) {
  files.push(list);
});

app.get("/", (req, res) => {
  res.json({ Files: { files } });
});

app.listen(PORT);



