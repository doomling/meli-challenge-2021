import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ItemDetail from "./../components/ItemDetail";
import { itemDetailData } from "./__mocks__/mockedData.js";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<ItemDetail data={itemDetailData} />, container);
  });

  expect(container.querySelector(".item-detail-title").textContent).toBe(
    "Smart Tv Hitachi Cdh-le40smart17 Led Full Hd 40  100v/240v"
  );

  expect(container.querySelector(".item-detail-price").textContent).toBe(
    "$41359.00"
  );
});
