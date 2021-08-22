import { authRequest } from '../utils/request';

const SUB_URL = 'ingredient';

export interface Ingredient {
  id: number;
  name: string;
  is_perishable: boolean;
  type: string;
}

export const getIngredient = (name: string): Promise<Ingredient[]> => {
  return new Promise((resolve, reject) => {
    const params = { name };

    authRequest({ url: `${SUB_URL}/search`, method: 'get', params })
      .then(res => {
        console.log(res);
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
