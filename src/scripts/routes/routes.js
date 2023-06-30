import Home from '../views/pages/home';
import Favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
