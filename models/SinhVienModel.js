const mongoose = require('mongoose');
const sinhvienSchema = new mongoose.Schema({
    masv:{
        type: String,
        required: true
    },

    tenSv:{
        type: String,
        required: true
    },
});

const sinhvien = mongoose.model('student', sinhvienSchema);
module.exports = sinhvien;