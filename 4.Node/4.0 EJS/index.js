import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.set('view engine', 'ejs');

// function dayChecker(req, res, next) {
//   const today = new Date();
//   const dayIndex = today.getDay();

//   const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   const isWeekend = dayIndex === 6 || dayIndex === 5;

//   res.locals.dayName = dayNames[dayIndex];
//   res.locals.week = isWeekend ? 'Weekend' : 'Weekday';
//   res.locals.activity = isWeekend ? 'Have fun!' : 'Work hard!';

//   next();
// }


//app.use(dayChecker);

app.get('/', (req, res) => {
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // console.log(day);
  let week = "a weekday";
  let activity = "it's time to work hard";
  let dayName = dayNames[day];

  if (day === 5 || day === 6) {
    week = "the weekend";
    activity = "it's time to have some fun";
  }

  res.render(__dirname + '/views/index.ejs'
    , {
    week: week,
    activity: activity,
    dayName: dayName
  });

  });







app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});