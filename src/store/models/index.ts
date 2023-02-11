import { Models } from "@rematch/core";
import { award } from "./award.model";

export interface RootModel extends Models<RootModel> {
  award: typeof award;
}

export const models: RootModel = {
  award
};
