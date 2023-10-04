export class MovieModel {
  /**
   * @type {number}
   */
  #id;
  /**
   * @type {string}
   */
  #title;
  /**
   * @type {string}
   */
  #posterPath;
  /**
   * @type {number}
   */
  #voteAverage;
  /**
   * @type {number}
   */
  #voteCount;
  /**
   * @type {string}
   */
  #overview;

  /**
   * @type {string}
   */
  #releaseDate;

  /**
   * @type {number}
   */
  #totalPages;

  /**
   * @param {Record<string, any>} data
   * */
  constructor(data) {
    this.init(data);
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get posterPath() {
    return this.#posterPath;
  }

  get voteAverage() {
    return this.#voteAverage;
  }

  get voteCount() {
    return this.#voteCount;
  }

  get overview() {
    return this.#overview;
  }

  get releaseDate() {
    return this.#releaseDate;
  }

  get toMainTemplate() {
    return `
         <div class="film-card" >
             <img alt="" src="http://image.tmdb.org/t/p/original${this.posterPath}">
             <div class="film-data">
                 <p class="film-data_rating">${this.voteAverage}</p>
                 <p class="film-data_people">(${this.voteCount})</p>
                 <p class="film-data_name">${this.title}</p>
             </div>
             <div class="film-overlay" id="${this.id}"></div>
         </div>
          <p id="noResult"></p>
    `;
  }

  /**
   * @param {Object.<string, string|number|Array.<number>>} data
   * @returns {void}
   */
  init(data) {
    this.#id = data.id;
    this.#title = data.original_title;
    this.#posterPath = data.poster_path;
    this.#voteAverage = data.vote_average;
    this.#voteCount = data.vote_count;
    this.#overview = data.overview;
    this.#releaseDate = data.release_date;
    this.#totalPages = data.total_pages;
  }
}