const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/notes", require("./routes/api/notes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
