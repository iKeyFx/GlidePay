import { useMatch } from "react-router";

export const useActiveMatch = (path) => {
  return !!useMatch(path);
};
