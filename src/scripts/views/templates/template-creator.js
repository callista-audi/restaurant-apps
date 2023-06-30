import CONFIG from '../../globals/config';

const createDetailListTemplate = (restaurant) => `
    <div class="grid-container">
        <div class="list-detail">
            <div class="list-box">
                <div class="list-content">
                    <h2 class="list-name">${restaurant.name}</h2>
                    <img class="list-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
                    <p class="list-address">${restaurant.address}, ${restaurant.city}</p>
                    <p class="list-about">
                        <span class="list-rating">Rating:⭐${restaurant.rating}</span>
                        <span class="list-city">City: ${restaurant.city}</span>
                    </p>
                    <p class="list-description">${restaurant.description}</p>
                </div>
            </div>
        </div>
        <div class="list-menu">
            <h3>OUR MENU LIST</h3>
            <div class="foods">
                <h4>THE FOOD LIST</h4>
                <div class="menu-container">
                    <ul class="list-foods">
                        ${restaurant.menus.foods.map((food) => `
                            <li>${food.name}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            <div class="drinks">
                <h4>THE DRINK LIST</h4>
                <div class="menu-container">
                    <ul class="list-drinks">
                        ${restaurant.menus.drinks.map((drink) => `
                            <li>${drink.name}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="review-box">
        <h3>CUSTOMER REVIEW</h3>
        <div class="list-review">
            ${restaurant.customerReviews.map((customer) => `
                <div class="review-detail">
                    <div class="review-name">
                        <h4>${customer.name}</h4>
                        <span class="review-date">${customer.date}</span>
                    </div>
                    <p class="review-description">${customer.review}</p>
                </div>
                `).join('')}
        </div>
    </div>
    `;
const createRestaurantNameListTemplate = (restaurant) => `
    <article class="restaurant-container">
        <a href="/#/detail/${restaurant.id}">
            <img class="restaurant-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
            <div class="rating_box">
                <span class="rating_icon">⭐</span>
                <span class="rating_text">${restaurant.rating}</span>
            </div>
            <div class="restaurant-content">
                <h3 class="restaurant-name">Name: ${restaurant.name}</h3>
                <p class= "restaurant-city">Kota: ${restaurant.city}</p>
                <p class="restaurant-description">${restaurant.description ? restaurant.description.slice(0, 100) : ''}</p>
            </div>
        </a>
    </article>
    `;
const createLikeButtonTemplate = () => (`
    <button aria-label="fav this restaurants" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`);
const createUnlikeButtonTemplate = () => (`
    <button aria-label="unfav this restaurants" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`);

export {
  createDetailListTemplate,
  createRestaurantNameListTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
