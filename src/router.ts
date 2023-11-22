import { Router, Request, Response } from 'express'
import AuthService from './services/authService'
import AuthController from './controllers/authController'
import ArtistService from './services/artistService'
import ArtistController from './controllers/artistController'

const router = Router()
const authService = new AuthService();
const authController = new AuthController(authService);
const artistService = new ArtistService;
const artistController = new ArtistController(artistService);

router.get('/ping', (req: Request, res: Response) => {
    res.status(200).send("pong")
})

router.post('/token', authController.getToken);

router.get('/artist', artistController.getArtist);

export default router;