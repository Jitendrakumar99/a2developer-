var express = require('express');
const mongoose = require("mongoose")
var path = require('path');
const userroute = require('./routes/users')
const cors = require('cors');
require('dotenv').config();
var app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3001', // Assuming your frontend runs on port 3001
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", userroute);

// MongoDB connection with error handling
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://jitendrasharma6839:asqxV5qUgm4xqwPu@cluster0.kqbc3.mongodb.net/a2developer", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to database successfully");
})
.catch((err) => {
  console.error("Database connection error:", err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(3000, () => {
  console.log('Server is running at port 3000'); 
});

module.exports = app;
