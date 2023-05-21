class CocktailItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set cocktail(cocktail) {
    this._cocktail = cocktail;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        align-items: center;
        text-align: center;
      }
      .cocktail-info {
        padding: 24px;
      }
      .cocktail-info > img {
        border: 1px solid #f78536;
        border-radius: 4px;
        padding: 5px;
        width: 300px;
      }
      #myBtn {
        background-color: #f78536;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      #myBtn:hover {
        background-color: #f76b00;
      }
      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      }
      .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
      }
      .close {
        color: #f78536;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      </style>
    
      <div class="cocktail-info">
        <h2>${this._cocktail.strDrink}</h2>
        <img src="${this._cocktail.strDrinkThumb}" alt="${this._cocktail.strDrink}">
        <p>Category: ${this._cocktail.strCategory}</p>
        <p>Ingredient: </p>
        <li>${this._cocktail.strIngredient1}</li>
        <li>${this._cocktail.strIngredient2}</li>
        <li>${this._cocktail.strIngredient3}</li>
        <li>${this._cocktail.strIngredient4}</li>
        <button id="myBtn">Instructions</button>
      </div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h4>Measure</h4>
          <li>${this._cocktail.strIngredient1}: ${this._cocktail.strMeasure1}</li>
          <li>${this._cocktail.strIngredient2}: ${this._cocktail.strMeasure2}</li>
          <li>${this._cocktail.strIngredient3}: ${this._cocktail.strMeasure3}</li>
          <li>${this._cocktail.strIngredient4}: ${this._cocktail.strMeasure4}</li>
          <h4>Instructions</h4>
          <p>${this._cocktail.strInstructions}</p> 
        </div>
      </div>
        `;

    const modal = this.shadowDOM.querySelector(".modal");
    const modalBtn = this.shadowDOM.querySelector("#myBtn");
    const closeModalBtn = this.shadowDOM.querySelector(".close");

    modalBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }
}

customElements.define("cocktail-item", CocktailItem);
