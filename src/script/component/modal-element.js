class ModalElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });

    this.closeModal = this.closeModal.bind(this);

    this.render();
  }

  connectedCallback() {
    const openModalButton = document.getElementById("openModalButton");
    openModalButton.addEventListener("click", this.openModal.bind(this));
  }

  openModal() {
    this.render();
    this.shadowDOM.querySelector("#modalContainer").style.display = "block";
  }

  closeModal() {
    this.shadowDOM.querySelector("#modalContainer").style.display = "none";
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          /* Tambahkan gaya CSS untuk modal */
          #modalContainer {
            display: none;
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            }
          #closeModalButton {
            color: #f78536;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }
          #closeModalButton:hover,
          #closeModalButton:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
          }
          .modal-header {
            position: relative;
            background-color: white;
            color: #f78536;
            margin: auto;
            padding: 0;
            border: 1px solid #f78536;
            width: 80%;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            -webkit-animation-name: animatetop;
            -webkit-animation-duration: 0.4s;
            animation-name: animatetop;
            animation-duration: 0.4s
          }
          h2 {
            text-align: center;
          }
          @-webkit-keyframes animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
          }
          @keyframes animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
          }
          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 5px;
            display: flex;
            flex-wrap: nowrap;
            background-color: #f1f1f1;
            margin-top: 10px;
          }
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
          img {
            border-radius: 10px;
          }
          .container {
            padding: 5px;
            text-align: center;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin: 5px;
          }
          @media (max-width: 800px) {
            .card {
              flex-wrap: wrap;
            }
          }
        </style>
  
        <div id="modalContainer" >
          <button id="closeModalButton">&times;</button>
          <div class="modal-header">
            <h2>Popular Drinks</h2>
          </div>
          <div class="card">
            <div class="container">
              <h3>Long Vodka</h3>
              <img
                src="https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg"
                alt="Long Vodka"
                style="width: 100%"
              />
              <h4>Ingredients</h4>
              <p>Lime, Tonic water, Ice</p>
            </div>
            <div class="container">
              <h3>Vodka Fizz</h3>
              <img
                src="https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg"
                alt="Vodka Fizz"
                style="width: 100%"
              />
              <h4>Ingredients</h4>
              <p>Limeade, Nutmeg, Ice</p>
            </div>
            <div class="container">
              <h3>Vodka Slime</h3>
              <img
                src="https://www.thecocktaildb.com/images/media/drink/apex461643588115.jpg"
                alt="Vodka Slime"
                style="width: 100%"
              />
              <h4>Ingredients</h4>
              <p>Sprite, Lime Juice, Ice</p>
            </div>
            <div class="container">
              <h3>Vodka Lemon</h3>
              <img
                src="https://www.thecocktaildb.com/images/media/drink/mql55h1643820632.jpg"
                alt="Vodka Lemon"
                style="width: 100%"
              />
              <h4>Ingredients</h4>
              <p>Lemon Juice, Lemon Peel, Ice</p>
            </div>
          </div>
        </div>
      `;

    const closeModalButton = this.shadowDOM.querySelector("#closeModalButton");
    closeModalButton.addEventListener("click", this.closeModal);
  }
}

customElements.define("modal-element", ModalElement);
