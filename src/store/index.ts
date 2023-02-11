import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import { models, RootModel } from "./models";

type FullModel = ExtraModelsFromLoading<RootModel, { type: "full" }>;

export const store = init<RootModel, FullModel>({
  redux: {
    rootReducers: {
      RESET: () => undefined
    }
  },
  models,
  plugins: [immerPlugin({ blacklist: ["loading"] }), loadingPlugin({ type: "full" })]
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch = (): Dispatch => useReduxDispatch<Dispatch>();
