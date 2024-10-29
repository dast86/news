


export interface IFilters {
  page_number: number;
  page_size: number;
  category: string[] | string | null;
  keywords: string;
}

export interface Items {
  author: string;
  category: string[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface BannerAndNewsItem {
  author: string;
  title: string;
  image: string;
  published: string;
  id: string;
}

export interface NewsApiResponse {
  news: Items[];
  page: number;
  status: string;
}
export interface NewsACategoria {
  categories: string[];
  discription: string;
  status: string;
}

export type ParamsType = Partial<IFilters>;
