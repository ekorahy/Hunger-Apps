const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('unliking restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__title');
  I.click(firstRestaurantTitle);
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
