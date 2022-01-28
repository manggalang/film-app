import animeAPI from "@/api/api";
import { AnimeDataFromAPI, IAnimesData } from "@/interfaces/anime.interface";

class AnimeService {
  async getAnime(): Promise<AnimeDataFromAPI> {
    return await animeAPI("/anime", {
      method: "GET",
    });
  }

  async searchAnime(title: string): Promise<IAnimesData> {
    const response = await animeAPI(`/anime/${title}`, {
      method: "GET",
    });
    return response.data;
  }

  async getDetailAnime(id: number): Promise<IAnimesData> {
    const response = await animeAPI(`/anime/${id}`, {
      method: "GET",
    });
    return response.data;
  }
}

export default AnimeService;
