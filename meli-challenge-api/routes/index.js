import Express from "express";
const Router = Express.Router();
import ListItemController from "./../controllers/listItemController.js";
import ListItemService from "./../services/listItemService.js";
const ListItemInstance = new ListItemController(new ListItemService());

Router.get("/api/items", (req, res, next) => {
  ListItemInstance.getItems(req, res);
});

Router.get("/api/items/:id", (req, res, next) => {
  ListItemInstance.getItemById(req, res);
});

export default Router;
