import { init } from "@rematch/core";
import { render } from "@testing-library/react";
import { Nominee, SelectedNominee } from "models/nominee";
import React from "react";
import { Provider } from "react-redux";
import { AwardState } from "store/models/award.model";

const state: AwardState = {
  categories: [],
  selectedNominees: []
};

const award = {
  state,
  reducers: {
    selectNominee(state: AwardState, nominee: SelectedNominee) {
      return {
        ...state,
        selectedNominees: [
          ...state.selectedNominees.filter(selectedNominee => selectedNominee.categoryId !== nominee.categoryId),
          nominee
        ]
      };
    },
    unselectNominee(state: AwardState, nominee: Nominee) {
      return {
        ...state,
        selectedNominees: state.selectedNominees.filter(selectedNominee => selectedNominee.nomineeId !== nominee.id)
      };
    }
  }
};

export const renderWithRematchStore = (
  ui: React.ReactElement,
  store = init({
    models: { award }
  })
) =>
  render(ui, {
    wrapper: ({ children }: any) => <Provider store={store}>{children}</Provider>
  });
