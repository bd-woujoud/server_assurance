const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db.js");

const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();
const corsOptions = {
  // origin: ["https://big_money_business.surge.sh"], 
  origin: ["http://localhost:3000"],
  credentials: true, // This allows cookies to be sent
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// const userRoutes = require("./routes/userRoutes.js");
app.use("/users", require("./routes/userRoutes.js"));

// app.get("/", (req, res) => res.send("Server is ready"));



app.listen(port, () => console.log(`Server started on port ${port}`));
