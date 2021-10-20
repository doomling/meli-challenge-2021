import Express from "express";
const Router = Express.Router();
import ListItemController from "./../controllers/listItemController.js";
const ListItemInstance = new ListItemController();

/* GET home page. */
Router.get("/api/items/:query", (req, res, next) => {
  ListItemInstance.getItems(req, res);
});

export default Router;
