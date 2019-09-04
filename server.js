const express = require('express');
const consolidate = require('consolidate');
const path = require('path');
const PORT = '3000';

const app = express();
app.set('views', 'dist');
app.engine('html', consolidate.mustache);
app.set('view engine', 'html');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
