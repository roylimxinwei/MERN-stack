require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workout");

const app = express(); // this creates an express app

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
// we only use routes from workout.js if URL start with /api/workouts
app.use("/api/workouts", workoutRoutes);

//listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000!!");
});
