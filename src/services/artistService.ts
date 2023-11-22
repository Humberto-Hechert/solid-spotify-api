import axios from 'axios';

class ArtistService{

    async getArtist(idArtist: string, accessToken: string){

        try{
            const url = `https://api.spotify.com/v1/artists/${idArtist}`
            const response = await axios.get(
                url,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );

            return response.data;
        } catch (error){
            console.error('Errro ao consultar artista' + error);
            throw new Error('Errro ao consultar artista');
        }
    }
}

export default ArtistService;