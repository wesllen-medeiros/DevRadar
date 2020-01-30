const express = require('express');
const mongoose = require ('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://wesllenmedeiros:medeiros6913@cluster0-bmzoq.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);