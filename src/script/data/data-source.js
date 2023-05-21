import axios from "axios";

class DataSource {
  static async searchCocktail(keyword) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
      );

      const { drinks } = response.data;
      if (drinks) {
        return drinks;
      } else {
        throw new Error(`${keyword} is not found`);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default DataSource;
