import { ModalComponent } from '../components/modal.component.js';
import { CarouselComponent } from '../components/carousel.component.js';
import { PaginationComponent } from '../components/pagination.component.js';
import { MoviesComponent } from '../components/movies.component.js';
import { HeaderComponent } from '../components/header.component.js';

export class AppComponents {
  /**
   * @type {HeaderComponent}
   * */
  header = new HeaderComponent();
  /**
   * @type {MoviesComponent}
   * */
  movie = new MoviesComponent();
  /**
   * @type {PaginationComponent}
   * */
  pagination = new PaginationComponent();
  /**
   * @type {CarouselComponent}
   * */
  carousel = new CarouselComponent();

  /**
   * @type {ModalComponent}
   * */
  modal = new ModalComponent();

  createStructure(container) {
    container.appendChild(this.header.container);
    container.appendChild(this.carousel.container);
    container.appendChild(this.movie.container);
    container.appendChild(this.pagination.container);
    container.appendChild(this.modal.container);
  }
}