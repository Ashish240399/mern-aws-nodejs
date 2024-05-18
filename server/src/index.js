const express = require('express');
const cors = require('cors');
const { helloRouter } = require('./routes/hello');
const { connectDB, getDb } = require("./db/db")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/hello",helloRouter);

(async () => {
    try {
      await connectDB();
      app.listen(8900, () => {
        console.log(`Server is running on port 8900`);
      });
    } catch (error) {
      console.error('Failed to start server', error);
      process.exit(1);
    }
  })();