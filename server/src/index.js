const express = require('express');
const cors = require('cors');
const { helloRouter } = require('./routes/hello');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/hello",helloRouter);

app.listen(8900,()=>{
    console.log('Server is running on port 8900');
})