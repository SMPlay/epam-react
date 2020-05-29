import * as constants from "../constants/constants";

const initialState = {
  filmsData: [],
  foundFilms: [],
  searchBy: "title",
  sortBy: "releaseDate",
  searchInputValue: "",
  currentFilm: {},
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SEARCH_BY_SWITCH:
      return { ...state, searchBy: action.payload };
    case constants.SORT_BY_SWITCH:
      return {
        ...state,
        sortBy: action.payload.typeSort,
        foundFilms: action.payload.sortedFoundFilms,
      };
    case constants.CHANGE_SEARCH_INPUT:
      return { ...state, searchInputValue: action.payload };
    case constants.SET_FOUND_FILMS:
      return { ...state, foundFilms: action.payload };
    case constants.LOADED_FILMS:
      return {
        ...state,
        filmsData: action.payload,
        foundFilms: action.payload,
      };
    case constants.SET_FILM:
      return { ...state, currentFilm: action.payload };
    default:
      return state;
  }
};

export default filmsReducer;