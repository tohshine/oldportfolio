const express = require('express');
const app = express();
const database = require('./config/db');
const path = require('path');

const PORT = process.env.PORT || 5000;

//?json req body
app.use(express.json({ extended: false }));

app.use('/api/admin', require('./route/admin/resetPassword'));
app.use('/api/admin/user', require('./route/admin/user'));
app.use('/api/admin/auth', require('./route/admin/auth'));
app.use('/api/admin/generate', require('./route/admin/generate'));
app.use('/api/client/cv', require('./route/client/cv'));

//serve static asset in production
if (process.env.NODE_ENV === 'production') {
  //server asset
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

//?mongo DB database here
database();

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
