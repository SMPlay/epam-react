import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Search } from "../Search";
import { SearchType, SortType } from "../../types";

describe("Search component", () => {
  interface Props {
    searchBy: SearchType;
    inputValue: string;
    onChangeInput: (value: string) => void;
    toggleSearchBy: (searchBy: SearchType) => void;
    submitValue: (sortBy: SortType, searchBy: SearchType, searchInputValue: string) => void;
  }

  let props: Props;
  // let component ? ***how get type for this var***
  beforeEach(() => {
    props = {
      searchBy: "title",
      inputValue: "",
      onChangeInput: jest.fn(),
      toggleSearchBy: jest.fn(),
      submitValue: jest.fn(),
    };
  });

  it("should render with initial state", () => {
    const tree = renderer.create(
      <Router>
        <Search {...props} />
      </Router>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should call function on click", () => {
    const component = mount<Router>(
      <Router>
        <Search {...props} />
      </Router>,
    );

    component.find("Button").first().simulate("click");
    component.find("Button").at(1).simulate("click");

    expect(props.toggleSearchBy).toBeCalled();
  });

  it("should one button have active", () => {
    const component = mount<Router>(
      <Router>
        <Search {...props} />
      </Router>,
    );
    const firstButton = component.find("Button").first();
    const secondButton = component.find("Button").at(1);

    expect(firstButton.prop("active")).toBeTruthy();
    expect(secondButton.prop("active")).toBeFalsy();
  });
});
