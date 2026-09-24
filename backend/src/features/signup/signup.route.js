import express from 'express'
import signupController from './signup.controller'
const router = express.Router()
router.post('/signup', signupController)
export default router
