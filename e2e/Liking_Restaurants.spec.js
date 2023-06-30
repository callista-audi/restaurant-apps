const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', async ({ I }) => {
  I.amOnPage('#/favorites');
  const likedRestaurants = await I.grabNumberOfVisibleElements('.list-detail');
  assert.strictEqual(likedRestaurants, 0);
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('#home');
  I.waitForElement('.restaurant-name', 10);
  I.seeElement('.restaurant-name');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('#/favorites');
  I.waitForElement('.posts-restaurant', 10);
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

// eslint-disable-next-line no-undef
Scenario('unliking a restaurant', async ({ I }) => {
  I.amOnPage('#home');
  I.waitForElement('.restaurant-name', 10);
  I.seeElement('.restaurant-name');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('#/favorites');
  I.waitForElement('.posts-restaurant', 10);
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Unliking the restaurant
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('#/favorites');
  I.waitForElement('.restaurant-container__empty', 10);
  const emptyFavoritesText = await I.grabTextFrom('.restaurant-container__empty');
  assert.strictEqual(emptyFavoritesText, 'You Dont Have Any Favorite Restaurant Yet');
});
