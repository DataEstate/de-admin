// @flow

import { type AppStateType } from "src/context/Types/AppStateType";

export type AppStateContextType = AppStateType & {
  dispatch: any
};
