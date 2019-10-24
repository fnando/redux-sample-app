import { useSelector } from "react-redux";

export function useReduxState() {
  return useSelector(state => state);
}
