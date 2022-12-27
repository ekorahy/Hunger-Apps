import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 tabindex="0" class="restaurant__title">${restaurant.name}</h2>
  <img tabindex="0" class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
   alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4 tabindex="0">City</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurant.rating}</p>
    <h4 tabindex="0">Categories</h4>
    <p>
      <ul class="restaurant__info__categories">
        <li tabindex="0">${restaurant.categories.map((category) => category.name).join('<li tabindex="0">')}</li>
      </ul>
    </p>
  </div>
  <div class="restaurant__overview">
    <h4 tabindex="0">Description</h4>
    <p tabindex="0">${restaurant.description}</p>
    <h4 tabindex="0">Foods Menu</h4>
    <p>
      <ol class="restaurant__overview__menu">
        <li tabindex="0">${restaurant.menus.foods.map((food) => food.name).join('<li tabindex="0">')}</li>
      </ol>
    </p>
    <h4 tabindex="0">Drinks Menu</h4>
    <p>
      <ol class="restaurant__overview__menu">
        <li tabindex="0">${restaurant.menus.drinks.map((drink) => drink.name).join('<li tabindex="0">')}</li>
      </ol>
    </p>
  <div class="review-container">
    <div class="review-container__header">
      <h4 tabindex="0" class="customer-reviews">Customer Reviews</h4>
    </div>
    ${restaurant.customerReviews.map((customer) => `
    <div class="customer-reviews__container">
      <div class="customer-reviews__icon">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
      </div>
      <div class="customer-reviews__desc">
        <p tabindex="0" class="customer-reviews__desc__name">${customer.name}</p>
        <p tabindex="0" class="customer-reviews__desc__date">${customer.date}</p>
        <div class="customer-reviews__desc__container">
          <p tabindex="0" class="customer-reviews__desc__review">${customer.review}</p>
        </div>
      </div>
    </div>
    `).join('')}
    <h4 tabindex="0" class="add-new-review">Add New Review</h4>
    <form id="addReview" class="add-review">
      <label tabindex="0" for="name">Name </label>
      <input type="text" id="inputName" name="name"
       placeholder="Your name.." required>
      <label tabindex="0" for="review">Review</label>
      <textarea id="inputReview" name="review"
       placeholder="Your review.." required></textarea>
      <input id="submitButton" type="submit" value="Submit">
    </form>
  </div>
`;

const createRestoItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img tabindex="0" class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
       data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__city">
          <p tabindex="0"><i class="fa fa-map-marker" aria-hidden="true"></i>
          <span class="restaurant-item__header__city__name">${restaurant.city}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <p tabindex="0" class="restaurant-item__content__rating"><i class="fa fa-star"
       aria-hidden="true"></i> RATING: ${restaurant.rating}</p>
      <h3 class="restaurant-item__content__name">
       <a class="restaurant__title" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
      </h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="like this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
