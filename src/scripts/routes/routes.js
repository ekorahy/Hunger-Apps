import RestoList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestoList, // default page
  '/list': RestoList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/review': Detail,
};

export default routes;
