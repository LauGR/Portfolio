const nodemailer = require('nodemailer');
const dotenv = require('dotenv').load();
module.exports =  (app) =>{
app.get('/',(req,res)=>{
    res.render('index')
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
        html: req.body.name + " " + req.body.email + " "+ req.body.message
    }
   
    transporter.sendMail(mail,(error, response) =>{
        if (error) {
            console.log("Mail non envoyé");
            res.redirect('/')
        } else {
            console.log("Mail envoyé avec succès!")
            res.redirect('/')
        }
        transporter.close();
    });
})

}