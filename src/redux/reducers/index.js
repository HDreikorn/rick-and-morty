import {
  ADD_FAVORITE,
  ADD_WATCH,
  ADD_MUST_WATCH,
  DELETE_FAVORITE,
  DELETE_WATCH,
  DELETE_MUST_WATCH,
} from "../actionTypes";

const initialState = {
  favorite: [],
  watch: [],
  mustWatch: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE: {
      const { id, name } = action.payload;
      return {
        ...state,
        favorite: [...state.favorite, { name: name, id: id }],
      };
    }
    case ADD_WATCH: {
      const { id, name } = action.payload;
      return {
        ...state,
        watch: [...state.watch, { name: name, id: id }],
      };
    }
    case ADD_MUST_WATCH: {
      const { id, name } = action.payload;
      return {
        ...state,
        watch: [...state.mustWatch, { name: name, id: id }],
      };
    }
    default:
      return state;
  }
}
