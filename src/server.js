const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const { connect } = require('http2');
require('dotenv').config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//render template ejs set up
app.set('views', path.join(__dirname, 'views')); // auto tìm kiếm các file trong thư mục views
app.set('view engine', 'ejs');
app.use(express.static('src/public/'));

app.get('/', (req, res) => {
    const data = { title: 'Minz Puiz' };
    res.render('index', data);
    //res.sendFile(path.join(__dirname),)
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About me' });
});

app.get('/project', (req, res) => {
    res.render('project', { title: 'Project' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

/*app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});*/

app.get('/hobbies', (req, res) => {
    res.render('hobbies', { title: 'Hobbies' });
});


//create transporter object to use SMTP option
const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports like 587
    auth:{
        user: 'jokerparttime@gmail.com',
        pass: 'diatfybfmanefssh' 
    }
});

app.post('/contact', (req, res) =>{
    const { name, email, subject, message } = req.body;

    //create email message
    let mailOptions = {
        from: email,
        to: 'jokerparttime@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    //send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('something went wrong !');
        } else {
            console.log('Email sent: ' + info.response);
            //res.send('success ! thank you <3');
            res.redirect('/contact');
        }
    });
});

//mail option

//send mail

const port = process.env.MY_PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// thư mục gốc: my-portfolio
/// node_modules (folder)
/// src (folder)
///// public (folder)
/////// css (folder)
///////// style.css (file)
/////// images (folder)
/////// js (folder)
///////// style.js (file)
///// views (folder)
/////// partials (folder)
///////// footer.ejs (file)
///////// header.ejs (file)
///////// navbar.ejs (file)
/////// about.ejs (file)
/////// contact.ejs (file)
/////// hobbies.ejs (file)
/////// index.ejs (file)
/////// project.ejs (file)
/// .env (file)
/// server.js (file)
/// package-lock.json (file)
/// package.json (file)
