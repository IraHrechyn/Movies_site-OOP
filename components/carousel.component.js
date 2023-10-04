import { AppModel } from "../types/app-model.js";

export class CarouselComponent {
  /**
   * @type {HTMLDivElement}
   */
  #container;
  #carouselContent;
  #prevArrow;
  #nextArrow;
  #scrollValue = 0;
  #scrollStep = 120;

  constructor() {
    this.#createContainerAndSet();
  }

  get container() {
    return this.#container;
  }

  #createContainerAndSet() {
    this.#container = document.createElement("div");
    this.#container.classList.add("film-carousel");
  }

  render() {
    this.#container.innerHTML = `
      <div class="prev-arrow"><</div>
      <div class="carousel-content"></div>
      <div class="next-arrow">></div>
    `;

    const carouselContent = this.#container.querySelector(".carousel-content");
    carouselContent.innerHTML = '';

    AppModel.carouselMovies.forEach((movie) => {
      const filmImage = document.createElement("img");
      filmImage.src = `http://image.tmdb.org/t/p/original${movie.posterPath}`;
      filmImage.alt = movie.title;

      filmImage.classList.add("film-image");

      filmImage.addEventListener("click", () => {
        window.open(`https://www.youtube.com/results?search_query=%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D0%B5%D1%80+${movie.title}`, "_blank");
      });

      carouselContent.appendChild(filmImage);
    });

    this.#initElements();
    this.#setupEventListeners();
  }

  #initElements() {
    this.#carouselContent = this.#container.querySelector('.carousel-content');
    this.#prevArrow = this.#container.querySelector('.prev-arrow');
    this.#nextArrow = this.#container.querySelector('.next-arrow');
  }

  #setupEventListeners() {
    this.#prevArrow.addEventListener('click', () => {
      this.#scrollValue -= this.#scrollStep;
      if (this.#scrollValue < 0) {
        this.#scrollValue = this.#carouselContent.scrollWidth - this.#carouselContent.clientWidth;
      }
      this.scrollToValue(this.#scrollValue);
    });

    this.#nextArrow.addEventListener('click', () => {
      this.#scrollValue += this.#scrollStep;
      if (this.#scrollValue > this.#carouselContent.scrollWidth - this.#carouselContent.clientWidth) {
        this.#scrollValue = 0;
      }
      this.scrollToValue(this.#scrollValue);
    });
  }

  scrollToValue(value) {
    this.#carouselContent.scrollTo({ left: value, behavior: 'smooth' });
  }
}