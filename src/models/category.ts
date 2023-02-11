import { Nominee } from "./nominee";

export interface Category {
  id: string;
  title: string;
  items: Nominee[];
}

export interface GetCategoryResponse {
  items: Category[];
}
