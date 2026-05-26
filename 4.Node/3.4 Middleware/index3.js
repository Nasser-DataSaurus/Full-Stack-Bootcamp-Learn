import express from "express";

const app = express();
const port = 3000;


function logger(req, res, next) {
  console.log(`Request: ${req.method} ${req.url}`);
  console.log(`Response status: ${res.statusCode}`);
  console.log(`Response time: ${Date.now() - req.startTime}ms`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
