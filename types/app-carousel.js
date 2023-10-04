export class AppCarousel {
  /**
   * @type {string}
   */
  #posterPath;
  /**
   * @type {string}
   */
  #title;

  constructor(data) {
    this.init(data);
  }

  get title() {
    return this.#title;
  }

  get posterPath() {
    return this.#posterPath;
  }

  /**
   * @param {Object.<string, string|number|Array.<number>>} data
   * @returns {void}
   * */
  init(data) {
    this.#title = data.original_title;
    this.#posterPath = data.poster_path;
  }
}