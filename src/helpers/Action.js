import { store } from "../config/store";
import { setActionStatus } from "../ducks/actionStatus";

export const defaultStatus = {
  done: false,
  loading: false,
  success: false,
  error: null
};

export function Action(type, callback) {
  return async (...args) => {
    const dispatch = store.dispatch;
    let payload;

    try {
      setActionStatus({ ...defaultStatus, type, loading: true, error: null });

      payload = await callback(...args, store);

      dispatch({
        type,
        payload
      });

      setActionStatus({ ...defaultStatus, type, done: true, success: true });
    } catch (error) {
      setActionStatus({ ...defaultStatus, type, error, done: true });
    }

    return payload;
  };
}
