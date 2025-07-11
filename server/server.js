const express = require("express");
const cors = require('cors');
require("dotenv").config();
const app = express();
const connectDB = require("./connect/database");
const classRoute = require('./routes/classRoute');
const userRoute = require('./routes/userRoute');
const roleRoute = require('./routes/roleRoute');


app.use(cors());
app.use(express.json());
app.use('/api/classes',classRoute );
app.use('/api/users',userRoute);
app.use('/api/roles',roleRoute);
app.use('/api/teacher', require('./routes/teacherRoute'));
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to ExpressJS" });
  });

// app.use('/api', require('./routes/blog.route'));

  const PORT = process.env.PORT || 9999;
  const HOSTNAME = 'localhost';

  app.listen(PORT, HOSTNAME, () => {
    console.log(`✅ Server is running at http://${HOSTNAME}:${PORT}`);
    connectDB();
  });