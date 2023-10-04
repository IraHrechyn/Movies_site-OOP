import { AppModel } from "../types/app-model.js";
import { MovieModel } from "../types/movie.model.js";
import { AppCarousel } from '../types/app-carousel.js';

export class AppApiService {

  #apiUrl = `https://api.themoviedb.org/3/discover/movie`;
  #carouselApiUrl = `https://api.themoviedb.org/3/movie/now_playing`;

  get #fetchUrl() {
    return AppModel.filters.name ? this.#apiUrl.replace('discover', 'search') : this.#apiUrl;
  }

  /**
   * @returns {Promise<void>}
   * */
  async loadMovies() {
    try {
      const response = await fetch(this.#fetchUrl + AppModel.filters.toQuery).then(res => res.json());
      AppModel.movies = response.results.map((response) => new MovieModel(response));
      AppModel.pagination.totalPages = response.total_pages;
      AppModel.components.movie.render();
      AppModel.components.pagination.render();
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  async loadCarousel() {
    const newFilm = await fetch(this.#carouselApiUrl + AppModel.filters.toQuery).then(res => res.json());
    AppModel.carouselMovies = newFilm.results.map((newFilm) => new AppCarousel(newFilm));
    AppModel.components.carousel.render();
  }
}
