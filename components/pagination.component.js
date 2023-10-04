import { AppModel } from "../types/app-model.js";

export class PaginationComponent {
  /**
   * @type {HTMLDivElement}
   */
  #container;

  constructor() {
    this.#createContainerAndSet();
    this.#initListener();
  }

  get container() {
    return this.#container;
  }

  #createContainerAndSet() {
    this.#container = document.createElement("div");
    this.#container.classList.add("pagination");
  }

  render() {
    if (AppModel.pagination.totalPages === 1) return;
    this.#container.innerHTML = this.#getTemplate();
  }


  #initListener() {
    this.#container.addEventListener('click', event => {
      if (event.target.innerText === AppModel.pagination.pageCurrent.toString()) return;

      this.#container.innerHTML = "";
      const id = event.target.id;

      if (!id) AppModel.pagination.pageCurrent = parseInt(event.target.innerText);
      else {
        if (id === "prevPage") AppModel.pagination.pageCurrent = AppModel.pagination.pageCurrent > 1 ? AppModel.pagination.pageCurrent - 1 : 1;
        if (id === "nextPage") AppModel.pagination.pageCurrent = AppModel.pagination.pageCurrent < AppModel.pagination.totalPages ? AppModel.pagination.pageCurrent + 1 : AppModel.pagination.totalPages;
      }
      AppModel.filters.page = AppModel.pagination.pageCurrent;
      AppModel.apiService.loadMovies();
    });
  }

  #getTemplate() {
    let template = "";

    if (AppModel.pagination.pageCurrent > 1) template += '<span id="prevPage">❮</span>';

    let countStart = null;

    if (AppModel.pagination.pageCurrent === 1 || AppModel.pagination.pageCurrent === 2) countStart = 1;
    if (AppModel.pagination.pageCurrent > 2) countStart = AppModel.pagination.pageCurrent - 2;
    if (AppModel.pagination.totalPages > 5) {
      if (AppModel.pagination.pageCurrent === AppModel.pagination.totalPages - 1) countStart = AppModel.pagination.pageCurrent - 3;
      if (AppModel.pagination.pageCurrent === AppModel.pagination.totalPages) countStart = AppModel.pagination.pageCurrent - 4;
    }

    template += new Array(AppModel.pagination.totalPages > 5 ? 5 : AppModel.pagination.totalPages)
      .fill(null)
      .map((_, i) => `<span ${i + countStart === AppModel.pagination.pageCurrent ? 'class="active"' : ''}> ${i + countStart}</span>`)
      .join("");

    if (AppModel.pagination.totalPages > 5 && AppModel.pagination.pageCurrent !== AppModel.pagination.totalPages) template += '<span id="nextPage">❯</span>';
    return template;
  }
}