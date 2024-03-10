const express = require("express");

const app = express();

const PORT = 3000;
let currDate = new Date();

const TimeAffiche = (req, res, next) => {
  if (
    currDate.getDay() == 0 ||
    currDate.getDay() ==6 ||
    currDate.getHours() < 9 ||
    currDate.getHours() > 17
  ) {
    return res.send(
      "<h1 style='text-decoration: text-align: center;vertical-align:middle; position: absolute;left:0;right:0;top:30%;' >The web application is only available during working hours (Monday to Friday,  from 9 to 17).</h1>"
    );
  }
  next();
};

app.use(TimeAffiche);
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/pages/home.html");
});

app.get("/service", (req, res, next) => {
  res.sendFile(__dirname + "/pages/service.html");
});

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/pages/contact.html");
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});