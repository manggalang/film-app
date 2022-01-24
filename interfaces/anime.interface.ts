export interface IAnimesData {
  title: string;
  episodes: number;
  mal_id: any;
  key: any;
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
