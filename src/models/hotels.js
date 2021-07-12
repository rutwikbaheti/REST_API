const express = require("express")
const mongoose = require("mongoose")
const validator = require("validator")

const HotelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 1,
        maxlength : 20
    },
    location : {
        type : String,
        required : true,
        minlength : 1,
        maxlength : 50
    },
    email : {
        type : String,
        required : true,
        unique : [true,"Email id already exists"],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phoneno : {
        type : Number,
        required : true ,
        unique: true
    }
})

//create new collection
const Hotel = new mongoose.model('Hotel',HotelSchema);

module.exports = Hotel