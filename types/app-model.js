import { AppFilters } from './app-filters.js';
import { AppComponents } from './app-components.js';
import { AppPagination } from './app-pagination.js';
import { MovieModel } from './movie.model.js';
import { AppApiService } from '../service/app-api.service.js';

export class AppModel {
  /**
   * @type {AppFilters}
   * */
  static filters;

  /**
   * @type {AppComponents}
   * */
  static components;

  /**
   * @type {MovieModel[]}
   * */
  static movies = [];

  /**
   * @type {AppPagination}}
   * */
  static pagination;

  /**
   * @type {AppCarousel[]}
   * */
  static carouselMovies;

  /**
   * @type {MovieModel | null}}
   * */
  static selectedMovie;

  /**
   * @type {AppApiService}
   * */
  static apiService;

  /**
   * @returns {void}
   * */
  static init() {
    AppModel.filters = new AppFilters();
    AppModel.components = new AppComponents();
    AppModel.pagination = new AppPagination();
    AppModel.carouselMovies = [];
    AppModel.selectedMovie = null;
    AppModel.apiService = new AppApiService();

  }
}