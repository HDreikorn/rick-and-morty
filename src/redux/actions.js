import {
  ADD_FAVORITE,
  ADD_WATCH,
  ADD_MUST_WATCH,
  DELETE_FAVORITE,
  DELETE_WATCH,
  DELETE_MUST_WATCH,
} from "./actionTypes";

export const addFavorite = (content) => ({
  type: ADD_FAVORITE,
  payload: {
    id: content.id,
    name: content.name,
  },
});
