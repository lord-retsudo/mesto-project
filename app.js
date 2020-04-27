const path = require('path');
const express = require('express');

const router = require('./routes/router');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/', (req, res) => { res.status(404).json({ message: 'Запрашиваемый ресурс не найден' }); });

app.listen(PORT, () => {
  // console.log(`App listening on port ${PORT}`);
});
