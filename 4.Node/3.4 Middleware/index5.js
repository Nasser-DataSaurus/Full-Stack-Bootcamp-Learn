import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function middlewareA(req, res, next) {
  console.log("A runs first");
  next();
}

function middlewareB(req, res, next) {
  console.log("B runs second");
  next();
}

function middlewareC(req, res, next) {
  console.log("C runs third");
  next();
}

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log("Route runs last");
  res.send("Done");
});

// Console output:
// A runs first
// B runs second
// C runs third
// Route runs last
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});