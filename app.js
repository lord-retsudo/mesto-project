const path = require('path');
const express = require('express');
const router = require('./routes/router.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', (req, res) => { res.status(404).json({ message: 'Запрашиваемый ресурс не найден' }); });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
