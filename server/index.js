const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

//* cors config cross origin requests
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//* pass incoming json data
app.use(express.json());

app.use(cookieParser());

//* router
app.use("/api", router);

const PORT = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connnect to DB");
    console.log("Server is running " + PORT);
  });
});
