export class AppPagination {
  /**
   * @type {number}
   */
  #pageCurrent = 1;
  /**
   * @type {number}
   */
  #totalPages = 0;


  get pageCurrent() {
    return this.#pageCurrent;
  }

  set pageCurrent(value) {
    this.#pageCurrent = value;
  }

  get totalPages() {
    return this.#totalPages;
  }

  set totalPages(value) {
    this.#totalPages = value;
  }

}