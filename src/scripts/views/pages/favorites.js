import { createRestaurantNameListTemplate } from '../templates/template-creator';
import FavRestaurant from '../../data/fav-restaurant';

const Favorites = {
  async render() {
    return `
      <main id="mainContent" tabindex="0">
        <div class="content">
          <h1 class="heading-favorite">Your Favorite Restaurant</h1>
          <div class="posts-restaurant"></div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.posts-restaurant');
    const mainContainer = document.querySelector('#mainContent');

    if (!restaurants.length) {
      mainContainer.innerHTML += `
        <div>
            <p class="restaurant-container__empty">You Dont Have Any Favorite Restaurant Yet</p>
        </div>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantNameListTemplate(restaurant);
    });
  },
};

export default Favorites;
