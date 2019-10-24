import { useCallback, useEffect } from "react";

import { resetActionStatus } from "../ducks/actionStatus";
import { defaultStatus } from "../helpers/Action";
import { useReduxState } from "../hooks/useReduxState";

export function useActionStatus(actionType, shouldResetOnExit = true) {
  const { actionStatuses } = useReduxState();
  const reset = useCallback(() => resetActionStatus(actionType), [actionType]);

  useEffect(
    () => () => {
      if (shouldResetOnExit) {
        reset();
      }
    },
    [actionType, shouldResetOnExit, reset]
  );

  return [actionStatuses[actionType] || defaultStatus, reset];
}
