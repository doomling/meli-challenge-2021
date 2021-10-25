import ListItemService from "./../services/listItemService.js";
const ListItemInstance = new ListItemService();

test("calculates decimals from float", () => {
  expect(ListItemInstance.getDecimals(2.99)).toBe("99");
});

test("calculates decimals from int", () => {
  expect(ListItemInstance.getDecimals(7)).toBe("00");
});
