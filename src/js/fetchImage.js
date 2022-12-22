const axios = require('axios').default;

export default class FetchImage {
  #BASE_URL = 'https://pixabay.com';
  #URL = 'api/';
  #KEY = '32212572-bf53323a03e0775bbc92b6acc';
  #PER_PAGE = 40;

  constructor() {
    this.instance = axios.create({
      baseURL: this.#BASE_URL,
      timeout: 1000,
    });
    this.curentPage = 1;
    this.curentTextQuery = '';
  }

  getParamReguest(textQuery) {
    return {
      key: this.#KEY,
      image_type: 'photo',
      pretty: true,
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.#PER_PAGE,
      page: this.curentPage,
      q: this.curentTextQuery,
    };
  }

  getImage() {
    return this.instance.get(this.#URL, {
      params: this.getParamReguest(),
    });
  }
}
