import axios from "axios";

class ListItemController {
  getDecimals(number) {
    return (number - Math.floor(number)).toFixed(2);
  }

  async getItems(req, res) {
    const { q } = req.query;

    if (q) {
      try {
        const rawItemData = await axios.get(
          `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
        );

        const { data } = rawItemData;

        const categoryData = data.available_filters.find((filter) => {
          return filter.id == "category";
        });

        const categories = categoryData.values.map((category) => {
          return category.name;
        });

        const items = data.results.map((item) => {
          return {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: item.price,
              decimals: this.getDecimals(item.price),
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping?.free_shipping,
          };
        });

        const response = {
          author: {
            name: "Bel",
            lastname: "Rey",
          },
          categories,
          items,
        };

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
        const rawItemData = await axios.get(
          `https://api.mercadolibre.com/items/${id}`
        );

        const rawItemDescription = await axios.get(
          `https://api.mercadolibre.com/items/${id}/description`
        );

        const itemValues = await Promise.all([rawItemData, rawItemDescription]);

        const itemData = itemValues.reduce((prev, current) => {
          const item = { ...prev.data, ...current.data };
          return item;
        });

        const item = {
          id: itemData.id,
          title: itemData.title,
          price: {
            currency: itemData.currency_id,
            amount: itemData.price,
            decimals: this.getDecimals(itemData.price),
          },
          picture: itemData.thumbnail,
          condition: itemData.condition,
          free_shipping: itemData.shipping?.free_shipping,
          sold_quantity: itemData.sold_quantity,
          description: itemData.plain_text,
        };

        const response = {
          author: {
            name: "Bel",
            lastname: "Rey",
          },
          item,
        };

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
