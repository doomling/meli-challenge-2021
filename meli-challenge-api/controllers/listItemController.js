import axios from "axios";

class ListItemController {
  constructor(ListItemService) {
    this.ListItemService = ListItemService;
  }

  async getItems(req, res) {
    const { q } = req.query;

    if (q) {
      try {
        const response = await this.ListItemService.getItems(q);
        res.json(response);
      } catch (e) {
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(400);
    }
  }

  async getItemById(req, res) {
    const { id } = req.params;

    if (id) {
      try {
        const response = await this.ListItemService.getItemById(id);
        res.json(response);
      } catch (e) {
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(400);
    }
  }
}

export default ListItemController;
