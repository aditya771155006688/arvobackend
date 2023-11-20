const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/error");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

const app = express();

app.set("view engine", "ejs");

app.set("views", "./views");

mongoose
  .connect(
    "mongodb://ashish:ashish123@ac-8nehjed-shard-00-00.xtpbobv.mongodb.net:27017,ac-8nehjed-shard-00-01.xtpbobv.mongodb.net:27017,ac-8nehjed-shard-00-02.xtpbobv.mongodb.net:27017/?ssl=true&replicaSet=atlas-o4urtj-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("> DB connection successful ... ");
  });

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.get("/xys", (req, res) => {
  res.json({
    hi: "hello",
  });
});

app.use(errorHandler);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`> App running on port ${PORT} ...`);
});
