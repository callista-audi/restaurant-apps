import FavRestaurant from '../src/scripts/data/fav-restaurant';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

// eslint-disable-next-line no-undef
describe('Unliking A Restaurant', () => {
  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavRestaurant.putRestaurant({ id: 1 });
  });
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavRestaurant.deleteRestaurant(1);
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    // eslint-disable-next-line no-unused-expressions, no-undef
    expect(document.querySelector('[aria-label="unfav this restaurants"]')).toBeTruthy;
  });

  // eslint-disable-next-line no-undef
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="fav this restaurants"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    document
      .querySelector('[aria-label="unfav this restaurants"]')
      .dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavRestaurant.getAllRestaurants()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    await FavRestaurant.deleteRestaurant(1);
    document
      .querySelector('[aria-label="unfav this restaurants"]')
      .dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavRestaurant.getAllRestaurants()).toEqual([]);
  });
});
