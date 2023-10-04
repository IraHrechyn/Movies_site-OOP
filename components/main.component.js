import { AppModel } from "../types/app-model.js";

export class MainComponent {
  /**
   * @type {HTMLElement}
   */
  #container;

  constructor(containerId) {
    this.#validateAndSetContainer(containerId);
    this.#render();
  }

  #validateAndSetContainer(containerId) {
    this.#container = document.getElementById(containerId);
    if (!this.#container) throw new Error(`Can't find container with id "${containerId}"`);
  }

  #render() {
    AppModel.components.createStructure(this.#container);
    AppModel.apiService.loadCarousel();
    AppModel.apiService.loadMovies();
  }
}
