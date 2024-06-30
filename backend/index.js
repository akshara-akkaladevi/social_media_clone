const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Authroute = require("./routes/authRoute");

mongoose.connect("mongodb+srv://officialdevcommunity:9XDUcwyJHecdf17n@cluster0.ip0qa9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database connection failed", err));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", Authroute);

const port = 8000;
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
