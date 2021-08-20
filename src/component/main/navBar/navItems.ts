import Panier from "../../../page/main/panier";
import MesMenus from "../../../page/main/meshMenus";
import IdeesRecettes from "../../../page/main/ideesRecettes";
import PanierSVG from "./svgs/panierSVG";
import MesMenusSVG from "./svgs/mesMenusSVG";
import IdeesRecettesSVG from "./svgs/ideesRecettesSVG";

const navItems = [
  {
    path: "/mes-menus",
    name: "Mes menus",
    component: MesMenus,
    navImage: MesMenusSVG,
  },
  {
    path: "/idees-recettes",
    name: "Idées recettes",
    component: IdeesRecettes,
    navImage: IdeesRecettesSVG,
  },
  {
    path: "/panier",
    name: "Panier",
    component: Panier,
    navImage: PanierSVG,
  },
];

export default navItems;
