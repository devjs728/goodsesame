import { FamilyMembers } from "./familyMembers";

export interface UserInfo {
  access_token: string;
  firstname: string;
  lastname: string;
  username: string;
  locale: string;
  description: string;
  website: string;
  blog: string;
  instagram: string;
  facebook: string;
  pinterest: string;
  diet: string;
  picture: any;
  banner: any;
  gender: any;
  email: string;
  shopping_preference: any;
  anonymous_collect: boolean;
  allergies: string[];
  servings: number;
  time_available: any;
  cooking_level: any;
  budget: any;
  newsletter: any;
  provider: string;
  address: any;
  address_lat: any;
  address_lon: any;
  birthdate: any;
  kitchen_gear: any[];
  ingredients_disliked: any[];
  family_members: FamilyMembers;
  autologin_token: string;
  filters: any;
}

export interface SetUerInfo {
  adult?: number;
  child?: number;
  time_available?: number;
  cooking_level?: number;
  budget?: number;
}
