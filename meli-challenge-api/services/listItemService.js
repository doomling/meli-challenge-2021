import client from "./../utils/axiosClient.js";

class ListItemService {
  getDecimals(number) {
    return (number - Math.floor(number)).toFixed(2).slice(2, 4);
  }

  async getItems(q) {
    try {
      const rawItemData = await client.get(`/sites/MLA/search?q=${q}&limit=4`);

      const { data } = rawItemData;

      const categoryData = data.available_filters.find((filter) => {
        return filter.id == "category";
      });

      const categories = categoryData.values.map((category) => {
        return category;
      });

      const items = data.results.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
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

      return response;
    } catch (e) {
      return e;
    }
  }

  async getItemById(id) {
    try {
      const rawItemData = await client.get(`/items/${id}`);

      const rawItemDescription = await client.get(`/items/${id}/description`);

      const itemValues = await Promise.all([rawItemData, rawItemDescription]);

      const itemData = itemValues.reduce((prev, current) => {
        const item = { ...prev.data, ...current.data };
        return item;
      });

      const itemCategory = await client.get(
        `/categories/${rawItemData.data.category_id}`
      );

      const item = {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: Math.floor(itemData.price),
          decimals: this.getDecimals(itemData.price),
        },
        picture: itemData.pictures[0]?.url,
        condition: itemData.condition,
        free_shipping: itemData.shipping?.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: itemData.plain_text,
        category: itemCategory.data,
      };

      const response = {
        author: {
          name: "Bel",
          lastname: "Rey",
        },
        item,
      };
      return response;
    } catch (e) {
      return e;
    }
  }
}

export default ListItemService;
