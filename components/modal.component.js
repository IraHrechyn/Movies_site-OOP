import { AppModel } from "../types/app-model.js";

export class ModalComponent {
  /**
   * @type {HTMLElement}
   */
  #container;

  constructor() {
    this.#createContainerAndSet();
  }

  get container() {
    return this.#container;
  }

  #createContainerAndSet() {
    this.#container = document.createElement("div");
    this.#container.classList.add("modal");
  }

  render() {
    this.#container.innerHTML = `
        <div class="modal-content">
            <span class="line"></span>
            <span class="close-button">&times;</span>
            <img alt="" class="modal-image" src="http://image.tmdb.org/t/p/original${AppModel.selectedMovie.posterPath}">
            <div class="modal-details">
                <h2 class="modal-title">${AppModel.selectedMovie.title}</h2>
                <div class="description">
                    <p class="modal-year">Year: ${AppModel.selectedMovie.releaseDate.substring(0, 4)}</p>
                    <p class="modal-description">${AppModel.selectedMovie.overview}</p>
                </div>
                <hr>
            </div>
        </div>
        `;
    this.#initListener();
  }

  #initListener() {
    this.#container.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const closeButton = this.#container.querySelector('.close-button');

    closeButton.addEventListener('click', () => {
      this.#container.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }
}