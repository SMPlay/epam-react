import { initialState, filmsReducer } from "../reducer";
import {
  TOGGLE_SEARCH_BY,
  CHANGE_SEARCH_INPUT,
  SET_FOUND_FILMS,
  LOAD_FILMS_SUCCESS,
  SORT_BY_TYPE,
  SET_FILM,
  IS_LOADING,
} from "../../constants";

describe("Film reducer", () => {
  let data;
  beforeEach(() => {
    data = [
      { id: 1, name: "test 1", rating: 8 },
      { id: 2, name: "test 2", rating: 10 },
      { id: 3, name: "test 3", rating: 2 },
    ];
  });

  it("should replace isLoading", () => {
    const action = {
      type: IS_LOADING,
      payload: false,
    };

    const rightState = initialState.update("isLoading", () => false);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should replace searchBy", () => {
    const action = {
      type: TOGGLE_SEARCH_BY,
      payload: "genres",
    };

    const rightState = initialState.update("searchBy", () => "genres");
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should replace searchInputValue", () => {
    const action = {
      type: CHANGE_SEARCH_INPUT,
      payload: "test",
    };

    const rightState = initialState.update("searchInputValue", () => "test");
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should replace filmsData", () => {
    const action = {
      type: SET_FOUND_FILMS,
      payload: data,
    };

    const rightState = initialState.update("filmsData", () => data);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should loaded filmsData", () => {
    const action = {
      type: LOAD_FILMS_SUCCESS,
      payload: data,
    };
    const rightState = initialState.update("filmsData", () => data);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should replace sortedFoundFilms", () => {
    const action = {
      type: SORT_BY_TYPE,
      payload: "rating",
    };

    const rightState = initialState.update("sortBy", () => "rating");
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should replace currentFilm", () => {
    const film = { id: 1, name: "test 1" };

    const action = {
      type: SET_FILM,
      payload: film,
    };

    const rightState = initialState.update("currentFilm", () => film);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });
});