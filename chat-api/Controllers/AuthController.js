const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const mongoose = require('mongoose')

const {UserModel} = require('chat-schemas-models')

const SignUp = async (req, res, next) => {
    try {
        console.log(res.body)
    } catch (e) {

    }
}


module.exports = {
    SignUp
}