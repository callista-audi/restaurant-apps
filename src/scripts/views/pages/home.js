import { createRestaurantNameListTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-sources';

const Home = {
  async render() {
    return `
      <main id="mainContent" tabindex="0">
        <div class="content">
          <h1 class="heading-favorite">Come On See What We Have!!</h1>
          <div class="posts-restaurant"></div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('.posts-restaurant');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantNameListTemplate(restaurant);
    });
  },
};

export default Home;
