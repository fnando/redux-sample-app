import reduceReducers from "reduce-reducers";
import { createStore } from "redux";

import { reducer as actionStatus } from "../ducks/actionStatus";
import { reducer as githubReducer } from "../ducks/github";

const initialState = {
  userProfile: {},

  // Actions created using `helpers/Action` are going to have their statuses
  // stored here.
  actionStatuses: {}
};

const rootReducer = reduceReducers(initialState, actionStatus, githubReducer);
export const store = createStore(rootReducer, initialState);
