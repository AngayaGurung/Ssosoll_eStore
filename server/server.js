const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const errorHandler = require("./middleware/errorHandlingMiddleware");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/images", express.static(path.join(__dirname, "Images")));
// routes
app.use("/user", require("./routes/User"));
app.use("/product", require("./routes/Product"));

app.use(errorHandler);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is listening on PORT: ${process.env.SERVER_PORT}`);
});
