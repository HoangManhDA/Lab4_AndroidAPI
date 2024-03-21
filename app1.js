//import thu vien
const { error, info } = require('console');
const express = require('express');
const mailer  = require('nodemailer');
const app = express();// tao doi tương server

//tao transporter 

let transporter = mailer.createTransport({
    service : 'gmail',
    auth: {
        user: 'manhthph13394@fpt.edu.vn',
        pass: 'znyn mxvf tyjy srdd'

    }

});


// gui email
let mailOption = {
    from:'manhthph13394@fpt.edu.vn',
    to: 'khimarvelliu@gmail.com',
    subject: 'test email',
    text: 'Day la email test'
};

// gui email

transporter.sendMail(mailOption, (error, info) =>{
    if (error) {
        console.error(error);
    }else{
        console.log('Thanh cong' + info.messageId);
    }

});

// khoi dong server

app.listen(3004, ()=>{
    console.log('server dang chay o cong 3004');
});