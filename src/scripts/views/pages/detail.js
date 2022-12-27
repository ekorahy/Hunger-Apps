import UrlParser from '../../routes/url-parser';
import TheRestaurantDb from '../../data/therestaurantdb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDb.detailResto(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML = createRestoDetailTemplate(restaurant);

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });

    const submitButton = document.querySelector('#submitButton');
    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    const restaurantId = restaurant.id;
    submitButton.addEventListener('click', async () => {
      const review = {
        id: restaurantId,
        name: inputName.value,
        review: inputReview.value,
      };
      const sendReview = await TheRestaurantDb.sendReview(review);
      inputName.value = '';
      inputReview.value = '';
      console.log(sendReview);
    });
  },
};

export default Detail;
