import { Request, Response } from "express";
import ArtistService from "../services/artistService";

class ArtistController {
    private artistService: ArtistService;

    constructor(artistService: ArtistService) {
        this.artistService = artistService;
      }

      getArtist = async (req: Request, res: Response) => {
        try{
            const { idArtist, accessToken } = req.body;
            const artistResponse = await this.artistService.getArtist(idArtist, accessToken);
            res.status(200).json(artistResponse);
        }  catch (error) {
            res.status(500).json({ error: error.message });
        }
      }
}

export default ArtistController;