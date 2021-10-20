import axios from "axios";

class ListItemController {
  async getItems(req, res) {
    const { query } = req.params;

    if (query) {
      try {
        const rawItemData = await axios.get(
          `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
        );

        const { data } = rawItemData;

        console.log(data);

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
              decimals: (item.price - Math.floor(item.price)).toFixed(2),
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
        return res.send(500);
      }
    } else {
      return res.send(400);
    }
  }
}

export default ListItemController;
