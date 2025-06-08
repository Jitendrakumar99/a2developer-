var express = require('express');
const mongoose = require("mongoose")
var path = require('path');
const userroute = require('./routes/users')
const cors = require('cors');
require('dotenv').config();
var app = express();


app.use(cors({
  origin: 'https://a2developer.vercel.app', 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", userroute);


mongoose.connect(process.env.URL || "mongodb+srv://jitendrasharma6839:asqxV5qUgm4xqwPu@cluster0.kqbc3.mongodb.net/a2developer", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to database successfully");
})
.catch((err) => {
  console.error("Database connection error:", err);
});


app.listen(3000, () => {
  console.log('Server is running at port 3000'); 
});

module.exports = app;
