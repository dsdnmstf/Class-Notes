//* ======================================================================
//*                 Checkout Page Solution
//* =======================================================================

const shippingRate = 15.0;
const taxRate = 0.18;
const dampingRate = 0.7;

const data = [
  {
    name: "Vintage Backpack",
    price: 34.99,
    amount: 1,
    img: "./img/photo1.png",
  },
  {
    name: "Levi Shooes",
    price: 45.99,
    amount: 1,
    img: "./img/photo2.png",
  },
  {
    name: "Antique Clocks",
    price: 69.99,
    amount: 1,
    img: "./img/photo3.jpg",
  },
];
let products;
const getDataFromDatabase = () => {
  if (!JSON.parse(localStorage.getItem("products"))) {
    localStorage.setItem("products", JSON.stringify(data));
    products = data;
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }
};

getDataFromDatabase();
renderProducts();

function renderProducts() {
  const productPanel = document.querySelector("#product-panel");

  products.forEach((product) => {
    const { name, img, amount, price } = product;
    productPanel.innerHTML += ` 
        <div class="border border-2 border-dark card bg-transparent mb-3">
            <div class="row g-0">
              <div class="col-md-5">
                <img
                  src=${img}
                  class="w-100 h-100 rounded-start"
               />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <div class="product-price">
                    <p>
                      <strong class="damping-price text-warning h2">${(
                        price * dampingRate
                      ).toFixed(2)}</strong>
                      <span class="text-decoration-line-through">${price.toFixed(
                        2
                      )}</span>
                    </p>
                  </div>
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="quantity-controller">
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="product-quantity">${amount}</p>
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="product-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-product">
                      Remove
                    </button>
                  </div>
                  <div class="mt-2">
                    Product Total: $<span  class="product-line-price">${(
                      price *
                      dampingRate *
                      amount
                    ).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div> `;
  });

  createEventsRemoveBtns();
  createEventsQuantityBtns();

  const cardPrices = document.querySelector("#card-prices");
  cardPrices.innerHTML = ` 
       <table class="table">
            <tbody>
              <tr class="text-end">
                <th class="text-start">Subtotal</th>
                <td>$<span class="subtotal">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Tax(18%)</th>
                 <td>$<span class="tax">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Shipping</th>
                 <td>$<span class="shipping">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Total</th>
                <td>$<span class="total">0.00</span></td>
              </tr>
            </tbody>
          </table> `;
}

function createEventsRemoveBtns() {
  const removeBtns = document.querySelectorAll(".remove-product");

  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      remove(btn);
    });
  });
}

function createEventsQuantityBtns() {
  const quantityDivs = document.querySelectorAll(".quantity-controller");

  quantityDivs.forEach((div) => {
    const minusBtn = div.firstElementChild;
    let amount = div.querySelector("#product-quantity");

    minusBtn.addEventListener("click", () => {
      amount.textContent = Number(amount.textContent) - 1;
      if (amount.textContent == "0") {
        alert("Product will be removed");
        remove(minusBtn);
      }
      updateTotal(amount);
    });
    const plusBtn = div.lastElementChild;
    plusBtn.addEventListener("click", () => {
      amount.textContent = Number(amount.textContent) + 1;
      updateTotal(amount);
    });
  });
}

function updateTotal(amount) {
  //! Update quantity (amount) values in the products array and localStroge area.
  const name = amount.closest(".row").querySelector(".card-title");
  products.map((product) => {
    if (product.name == name.textContent) {
      product.amount = Number(amount.textContent);
    }
  });
  localStorage.setItem("products", JSON.stringify(products));

  //! update the product total in the DOM
  const price = amount.closest(".row").querySelector(".damping-price");
  const productTotal = amount
    .closest(".row")
    .querySelector(".product-line-price");

  productTotal.textContent = (
    Number(price.textContent) * Number(amount.textContent)
  ).toFixed(2);
  calculateCartTotal();
}

function calculateCartTotal() {}

function remove(btn) {
  // btn.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
  //! Delete data from DOM
  btn.closest("article > .card").remove();

  const productName = btn
    .closest(".card")
    .querySelector(".card-title").textContent;
  products = products.filter((pro) => pro.name != productName);
  localStorage.setItem("products", JSON.stringify(products));
  if (!products.length) {
    const cardPrices = document.querySelector("#card-prices");
    cardPrices.innerHTML = `<h2>There is no product</h2>`;
    localStorage.setItem("products", JSON.stringify(""));
  }
}
