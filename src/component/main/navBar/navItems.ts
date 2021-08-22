import JeCuisine from '../../../page/main/jeCuisine';
import MesMenus from '../../../page/main/meshMenus';
import MesRecettes from '../../../page/main/mesRecettes';
import JeCuisineSVG from './svgs/jeCuisineSVG';
import MesMenusSVG from './svgs/mesMenusSVG';
import mesRecettesSVG from './svgs/mesRecettesSVG';

const navItems = [
  {
    path: '/mes-menus',
    name: 'Mes menus',
    component: MesMenus,
    navImage: MesMenusSVG,
  },
  {
    path: '/mes-recettes',
    name: 'Mes recettes',
    component: MesRecettes,
    navImage: mesRecettesSVG,
  },
  {
    path: '/je-cuisine',
    name: 'Je cuisine',
    component: JeCuisine,
    navImage: JeCuisineSVG,
  },
];

export default navItems;
