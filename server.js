const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: "./config.env" });
const assetRouter = require("./Routes/assetRoutes");
const performanceRouter = require("./Routes/performanceRoutes");
const userRouter = require("./Routes/userRoute");

const DB = `mongodb://localhost:27017`;

// const DB = process.env.DATABASE.replace(
//     "<password>",
//     process.env.DATABASE_PASSWORD
// );

mongoose
    .connect(DB, {
        useNewUrlParser: true,

        useUnifiedTopology: true,
    })
    .then(() => console.log("database connection success"));
// // const performanceRouter = require("./Routes/performanceRoutes");
app.use(express.json());
app.use("/signup", userRouter);
app.use("/api/v1/assets", assetRouter);
app.use("/api/v1/performance", performanceRouter);
app.listen(3000, () => console.log("server running at port 3000"));
