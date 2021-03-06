import React, { createContext, useEffect, useReducer } from "react";

const initialState = JSON.parse(localStorage.getItem("listState")) || {
  favorite: [],
  watched: [],
  mustWatch: [],
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case "ADD_WATCHED":
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    case "ADD_MUST_WATCH":
      return {
        ...state,
        mustWatch: [...state.mustWatch, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    case "DELETE_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (watched) => watched.id !== action.payload.id
        ),
      };
    case "DELETE_MUST_WATCH":
      return {
        ...state,
        mustWatch: state.mustWatch.filter(
          (mustWatch) => mustWatch.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const EpisodeListContext = createContext();

const EpisodeListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
    localStorage.setItem("listState", JSON.stringify(state));
    console.log(localStorage.getItem("listState"));
  });

  return (
    <EpisodeListContext.Provider value={{ state, dispatch }}>
      {children}
    </EpisodeListContext.Provider>
  );
};

export { EpisodeListContext, EpisodeListProvider };
