const express = require("express");
const cors = require("cors");
require("./config/dbConnect");
const usersRoute = require("./routes/users/usersRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");
const shlokaCtrl = require("./shlokaCtrl.js");
const app = express();

// middlewares

app.use(express.json()); // pass incoming data

// cors middleware
app.use(cors());

// post/api/v1/users/register

app.use("/api/v1/users", usersRoute);

app.get("/api/gita/shloka", shlokaCtrl);

// error handlers

app.use(globalErrHandler);

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on port, ${PORT}`));
