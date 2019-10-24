import { store } from "../config/store";

export const SET_ACTION_STATUS = "actionStatus/SET";
export const RESET_ACTION_STATUS = "actionStatus/RESET";

export const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_ACTION_STATUS: {
      const { type: actionType, ...props } = payload;

      return {
        ...state,
        actionStatuses: { ...state.actionStatuses, [actionType]: props }
      };
    }

    case RESET_ACTION_STATUS: {
      const { actionStatuses } = state;
      delete actionStatuses[payload.type];

      return {
        ...state,
        actionStatuses
      };
    }

    default:
      return state;
  }
};

export function setActionStatus(payload) {
  store.dispatch({ type: SET_ACTION_STATUS, payload });
}

export function resetActionStatus(type) {
  store.dispatch({ type: RESET_ACTION_STATUS, payload: { type } });
}
