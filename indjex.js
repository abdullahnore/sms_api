const express = require("express");
const fast2sms = require("fast-two-sms");
const app = express();
const PORT = 5000;
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/sendMessage", async (req, res) => {
  console.log(req.body);
  str = req.body;
  console.log(str);

  const datam = await fast2sms.sendMessage({
    authorization: process.env.API_KEY,
    route: `q`,
    message: str.msg,
    numbers: [str.number],
  });
  res.send(datam);
});
app.listen(PORT, () => {
  console.log("server listening :", PORT);
});
