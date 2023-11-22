import { Request, Response } from 'express';
import AuthService from '../services/authService';

class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  getToken = async (req: Request, res: Response) => {
    try {
      const { clientId, clientSecret} = req.body;
      const accessToken = await this.authService.getToken(clientId, clientSecret);
      res.status(200).json({ access_token: accessToken });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default AuthController;
