import { Action } from "../helpers/Action";

export const FETCH_PROFILE = "github/FETCH_PROFILE";

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return { ...state, userProfile: action.payload.profile };

    default:
      return state;
  }
}

export const fetchProfile = Action(FETCH_PROFILE, async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  if (!response.ok) {
    throw new Error(
      `Sorry! Couldn't search for this username. Please try again!`
    );
  }

  const data = await response.json();

  return { profile: data };
});
