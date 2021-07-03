import { ArticleResponse } from '@/types';
import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/search/v2';

const searchNews = async (keyword: string, page = 0) => {
  try {
    const {
      data: { response },
    } = await axios.get<ArticleResponse>(
      `${BASE_URL}/articlesearch.json?q=${keyword}&page=${page}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`,
    );

    const { docs, meta } = response;

    return { meta, docs: docs.map((article) => ({ ...article, isLiked: false })), keyword };
  } catch (e) {
    throw new Error(e);
  }
};

export default {
  searchNews,
};
