import { Category, GetCategoryResponse } from "models/category";
import axios from "./axios";

const api = {
  getBallotData: async (): Promise<Category[]> => {
    const { data } = await axios.get<GetCategoryResponse>("/api/getBallotData");

    return data.items ?? [];
  }
};

export default api;
