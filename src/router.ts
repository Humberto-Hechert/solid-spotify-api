import { Router, Request, Response } from 'express'
import AuthService from './services/authService'
import AuthController from './controllers/authController'

const router = Router()
const authService = new AuthService();
const authController = new AuthController(authService);

router.get('/ping', (req: Request, res: Response) => {
    res.status(200).send("pong")
})

router.post('/token', authController.getToken);

export default router;