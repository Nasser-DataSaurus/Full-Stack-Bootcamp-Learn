import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.set('view engine', 'ejs');

function dayChecker(req, res, next) {
  const today = new Date();
  const dayIndex = today.getDay();

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const isWeekend = dayIndex === 6 || dayIndex === 5;

  res.locals.dayName = dayNames[dayIndex];
  res.locals.week = isWeekend ? 'Weekend' : 'Weekday';
  res.locals.activity = isWeekend ? 'Have fun!' : 'Work hard!';

  next();
}


app.use(dayChecker);

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs');
});






app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});