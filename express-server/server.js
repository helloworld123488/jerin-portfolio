const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mailRoute = require('./routes/mail');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Use mail route
app.use('/send', mailRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
