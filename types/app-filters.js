export class AppFilters {
  #year = '';
  #name = '';
  #page = 1;
  #defaultQuery = '?api_key=5874acfd11651a28c55771624f7021f4&language=en-US';

  set year(value) {
    this.#year = value;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  set page(value) {
    this.#page = value;
  }

  get toQuery() {
    let query = `&page=${this.#page}`;

    if (this.#name) query += `&query=${this.#name || ""}`;

    if (this.#year) {
      query += this.#name
        ? `&year=${this.#year}`
        : `&primary_release_date.lte=${this.#year}-12-31&primary_release_date.gte=${this.#year}-01-01`;
    }

    return this.#defaultQuery + query;
  }
}