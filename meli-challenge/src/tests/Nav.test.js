import React from "react";
import { shallow } from "enzyme";
import Nav from "./../components/Nav";
import Search from "./../components/Search";

const wrapper = shallow(<Nav />);

describe("<Nav />", () => {
  it("renders Search component", () => {
    expect(wrapper.find(Search)).toBeTruthy();
  });

  it("renders `.logo`", () => {
    expect(wrapper.find(".logo")).toBeTruthy();
  });

  it("renders placeholder", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find("input").at(0).props().placeholder).toEqual(
      "Nunca dejes de buscar"
    );
  });
});
