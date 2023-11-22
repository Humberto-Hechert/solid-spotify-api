import axios from 'axios';

class AuthService {
  
  async getToken(clientId: string, clientSecret: string) {

    try {
      const tokenUrl = 'https://accounts.spotify.com/api/token';
      const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
      const response = await axios.post(
        tokenUrl,
        'grant_type=client_credentials',
        {
            headers: {
                Authorization: `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
      );

      return response.data.access_token;

    } catch (error) {
      console.error('Erro ao obter o access token:', error.message);
      throw new Error('Erro ao obter o access token');
    }
  }
}

export default AuthService;
