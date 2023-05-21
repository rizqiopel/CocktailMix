import "../component/cocktail-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";
import "../component/modal-element.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const cocktailListElement = document.querySelector("cocktail-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCocktail(searchElement.value);
      renderResult(result);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const renderResult = (results) => {
    cocktailListElement.cocktails = results;
  };

  const fallbackResult = (error) => {
    cocktailListElement.renderError(error);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
