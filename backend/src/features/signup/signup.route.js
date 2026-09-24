import express from 'express'
import signupController from './signup.controller'
const router = express.Router()
router.post('/', signupController)
export default router
