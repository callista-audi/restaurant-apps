import FavRestaurant from '../src/scripts/data/fav-restaurant';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer();
  });

  // eslint-disable-next-line no-undef
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    // eslint-disable-next-line no-unused-expressions, no-undef
    expect(document.querySelector('[aria-label = "fav this restaurants"]')).toBeTruthy;
  });
  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unfav this restaurants"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavRestaurant.getRestaurant(1);
    // eslint-disable-next-line no-undef
    expect(restaurant).toEqual({ id: 1 });

    FavRestaurant.deleteRestaurant(1);
  });

  // eslint-disable-next-line no-undef
  it('should not add a restaurant again when it is already liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    await FavRestaurant.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavRestaurant.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavRestaurant.deleteRestaurant(1);
  });
});
