const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder.
app.use('/public/', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser. urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('contact');
})

app.get('')


app.post('/send', (req, res) => {
  const output = `
    <h2>You have a new contact request</h2>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>E-mail: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
      <h3>Message: </h3>
      <p>${req.body.message}</p>
  `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'testpolarlight@gmail.com', 
        pass: '13Test12Polar11Light' 
    },
    // tls:{
    //     rejectUnauthorized: false
    // }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Nodemailer Contact" <testpolarlight@gmail.com>', 
    to: 'alexpolarlight@gmail.com', 
    subject: 'Node Contact Request', 
    text: 'Hello world?', 
    html: output 
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    res.render('contact', {msg: 'EMAIL HAS BEEN SENT'});

});
})

app.listen(80);

console.log("Running at Port 80");