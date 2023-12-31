const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/ToDoRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.port || 8000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`MongDB에 연결되었습니다.`))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT,
  () => console.log(`${PORT}으로 연결 중...`)
)