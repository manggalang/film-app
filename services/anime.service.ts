import animeAPI from "@/api/api";
import { AnimeDataFromAPI } from "@/interfaces/anime.interface";

class AnimeService {
  async getAnime() {
    return await animeAPI<AnimeDataFromAPI>("/anime", {
      method: "GET",
    });
  }
}

export default AnimeService;
