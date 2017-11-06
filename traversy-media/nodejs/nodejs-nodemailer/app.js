const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const noemailer = require('nodemailer');
const path = require('path');

const app = express();

// View engine setup.
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder.
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: account.user, // generated ethereal user
          pass: account.pass  // generated ethereal password
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
      to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg: 'Email has been sent'});
  });
});

app.listen('3000', () => console.log('Server started...'));
