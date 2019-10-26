const express = require('express');
const app = express();
const database = require('./config/db');

const PORT = process.env.PORT || 5000;

//?json req body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('welcome to my CV');
});

app.use('/api/admin/user', require('./route/admin/user'));
app.use('/api/admin/auth', require('./route/admin/auth'));
app.use('/api/admin/generate', require('./route/admin/generate'));
app.use('/api/client/cv', require('./route/client/cv'));

//?mongo DB database here
database()

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
