import { jest } from "@jest/globals";
import axios from "axios";
jest.mock("axios");
import ListItemService from "../services/listItemService.js";
const ListItemInstance = new ListItemService();
import { req, response } from "./__mocks__/items.js";

it("gets raw data from MELI API for query 'tele'", async () => {
  axios.get = jest.fn().mockResolvedValue(req);
});

test("Returns modeled item list", async () => {
  expect(ListItemInstance.getItems("tele")).resolves.toEqual(response);
});
