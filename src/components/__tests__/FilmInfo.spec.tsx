import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { FilmInfo } from "../FilmInfo";

describe("AboutFilm component", () => {
  interface Props {
    filmInfo: {
      title: string;
      poster_path: string;
      tagline: string;
      release_date: string;
      runtime: number;
      overview: string;
    };
  }

  let props: Props;
  beforeEach(() => {
    props = {
      filmInfo: {
        title: "Tomb Rider",
        poster_path: "",
        tagline: "blablabla",
        release_date: "2020-05-31",
        runtime: 150,
        overview: "blablabla",
      },
    };
  });

  it("should rendrer with initial state", () => {
    const tree = renderer
      .create(
        <Router>
          <FilmInfo {...props} />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
