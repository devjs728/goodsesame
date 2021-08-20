import AccountSettings from "../accountSettings";
import Contracter from "../contracter";
import FoodPreferences from "../foodPreferences";
import HelpFaq from "../helpFaq";
import MyAllergies from "../myAllergies";
import MyProfile from "../myProfile";

const navItems = [
  {
    path: "/settings/my-profile",
    name: "Mon profil",
    component: MyProfile,
  },
  {
    path: "/settings/food-preferences",
    name: "Préférences alimentaires",
    component: FoodPreferences,
  },
  {
    path: "/settings/my-allergies",
    name: "Mes allergies",
    component: MyAllergies,
  },
  {
    path: "/settings/account-settings",
    name: "Paramètres du compte",
    component: AccountSettings,
  },
  {
    path: "/settings/contrat",
    name: "Contacter GoodSesame",
    component: Contracter,
  },
  {
    path: "/settings/help",
    name: "Aide & FAQ",
    component: HelpFaq,
  },
];

export default navItems;
