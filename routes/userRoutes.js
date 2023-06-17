import express from 'express';
import createUser from '../controllers/userController.js'
const router = express.Router();

router.get('/', (req, res) => {
    res.send('UserRoutes working!!')
})

router.post('/register', createUser)

export default router