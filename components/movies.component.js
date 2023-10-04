import { AppModel } from '../types/app-model.js';

export class MoviesComponent {
  /**
   * @type {HTMLDivElement}
   */
  #container;

  constructor() {
    this.#createContainerAndSet();
    this.#handleFilmClick();
  }

  get container() {
    return this.#container;
  }

  render() {
    if (AppModel.movies.length === 0) {
      this.#container.innerHTML = `<p class="noResult">Your search for nothing was found.</p>`;
      return;
    }
    this.#container.innerHTML = AppModel.movies.map(movie => movie.toMainTemplate).join('');
  }

  #createContainerAndSet() {
    this.#container = document.createElement("div");
    this.#container.classList.add("moviesContainer");
  }

  #handleFilmClick() {
    this.#container.addEventListener('click', e => {
      AppModel.selectedMovie = AppModel.movies.find(movie => (movie.id.toString() === e.target.id));
      AppModel.components.modal.render();
    })
  }
}