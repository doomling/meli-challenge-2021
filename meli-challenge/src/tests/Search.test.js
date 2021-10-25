import React from "react";
import { shallow } from "enzyme";
import Search from "../components/Search";

const wrapper = shallow(<Search />);

describe("<Nav />", () => {
  it("renders `.search-icon`", () => {
    expect(wrapper.find(".search-icon")).toBeTruthy();
  });

  it("renders placeholder", () => {
    expect(wrapper.find("input").at(0).props().placeholder).toEqual(
      "Nunca dejes de buscar"
    );
  });
});
