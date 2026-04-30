const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');  //cors is used for security reasons
const app = express();
 
app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { to, subject, text, replyTo } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'jerindauntless@gmail.com',
        pass: 'yffn hrjp hpgb vnca'
      }
    });

    const info = await transporter.sendMail({
      from: 'jerindauntless@gmail.com', // must match auth.user
      to,
      subject,
      text,
      replyTo
    });

    res.status(200).send({ message: 'Email sent successfully', info });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));