import express from 'express'
import signupController from './signup.controller.js'
const signUpRouter = express.Router()
signUpRouter.post('/', signupController)
export default signUpRouter
