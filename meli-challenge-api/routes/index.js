import Express from "express";
import cors from "cors";
const Router = Express.Router();
import ListItemController from "./../controllers/listItemController.js";
import ListItemService from "./../services/listItemService.js";
const ListItemInstance = new ListItemController(new ListItemService());

const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200
};

Router.get("/api/items", cors(corsOptions), (req, res, next) => {
  ListItemInstance.getItems(req, res);
});

Router.get("/api/items/:id", cors(corsOptions), (req, res, next) => {
  ListItemInstance.getItemById(req, res);
});

export default Router;
