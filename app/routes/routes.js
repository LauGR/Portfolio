const nodemailer = require('nodemailer');
const dotenv = require('dotenv').load();
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index')
    })
    app.get('/validationemail', (req, res) => {
        res.render('validationEmail')
    })
    app.get('/nonvalidationemail', (req, res) => {
        res.render('nonvalidationEmail')
    })


    app.post('/email', (req, res) => {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });
        let mail = {
            from: req.body.email,
            to: process.env.EMAIL,
            html: " nom : " + req.body.name + " email : " + req.body.email + " message : " + req.body.message
        }

        transporter.sendMail(mail, (error, response) => {
            if (response) {
                console.log("Mail envoyé");
                res.redirect('/validationemail')
            } else {
                console.log("Mail non envoyé ")
                res.redirect('/nonvalidationemail')
            }
            transporter.close();
        });
    })

}