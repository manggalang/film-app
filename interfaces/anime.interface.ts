export interface IAnimesData {
  title: string;
  url: string;
  episodes: number;
  mal_id: any;
  key: number;
  score: number;
  synopsis: string;
  trailer: {
    embed_url: string;
  };
  images: {
    webp: {
      large_image_url: string;
    };
  };
}

export interface AnimeDataFromAPI {
  data: IAnimesData[];
  pagination: any;
}
