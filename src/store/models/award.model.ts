import { createModel } from "@rematch/core";
import api from "api/api";
import { Category } from "models/category";
import { Nominee, SelectedNominee } from "models/nominee";
import { RootModel } from "./index";

export interface AwardState {
  categories: Category[];
  selectedNominees: SelectedNominee[];
}

const initialState: AwardState = {
  categories: [],
  selectedNominees: []
};

export const award = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setCategories(state, categories: Category[]) {
      state.categories = categories;
    },
    selectNominee(state, nominee: SelectedNominee) {
      state.selectedNominees = [
        ...state.selectedNominees.filter(selectedNominee => selectedNominee.categoryId !== nominee.categoryId),
        nominee
      ];
    },
    unselectNominee(state, nominee: Nominee) {
      state.selectedNominees = state.selectedNominees.filter(
        selectedNominee => selectedNominee.nomineeId !== nominee.id
      );
    }
  },
  effects: dispatch => ({
    async getCategories() {
      const categories = await api.getBallotData();

      dispatch.award.setCategories(categories);
    }
  })
});
