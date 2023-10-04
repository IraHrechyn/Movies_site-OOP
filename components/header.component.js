import { AppModel } from "../types/app-model.js";

export class HeaderComponent {
  /**
   * @type {HTMLDivElement}
   */
  #container;

  constructor() {
    this.#createContainerAndSet();
    this.#render();
    this.#initListener();
  }

  get container() {
    return this.#container;
  }

  #createContainerAndSet() {
    this.#container = document.createElement("header");
    this.#container.classList.add("header");
  }

  #render() {
    this.#container.innerHTML = `
            <img alt="" class="logo" src="/images/logo.jpg"/>
            <div class="name">KINOUKR.com</div>
            <div class="search-container">
                <input class="search searchByYear" placeholder="Пошук за роком..." type="text">
                <input class="search searchByName" placeholder="Пошук за назвою..." type="text">
                <div class="find">
                    <img height="30px" src="/images/find.png" width="30px">
                </div>
            </div>`;
  }

  #initListener() {
    const yearInput = this.#container.querySelector('.searchByYear');
    const nameInput = this.#container.querySelector('.searchByName');
    const button = this.#container.querySelector('.find');

    button.addEventListener('click', () => {
      AppModel.filters.page = 1;
      AppModel.pagination.pageCurrent = 1;
      AppModel.filters.name = nameInput.value;
      AppModel.filters.year = yearInput.value;
      AppModel.apiService.loadMovies();
    });
  }
}