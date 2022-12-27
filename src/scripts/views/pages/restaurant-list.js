import TheRestaurantDb from '../../data/therestaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
      <div class="content">
        <h2 tabindex="0" class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDb.restoList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
  },
};

export default RestoList;
