window.addEventListener("DOMContentLoaded", (event) => {


  //!!                   SHOW CART ITEM                         //

  const showCart = () => {
    let ul = document.createElement("ul")

    const cartContainer = document.querySelector(".cart.cart__container")
    cartContainer.appendChild(ul);

    for (let i = 0; i < localStorage.length; i++) {
      let removeButton = document.createElement("button")
      removeButton.innerHTML = "Remove Item"

      let storedItem = localStorage.key(i)
      let storedValue = localStorage.getItem(storedItem)
      let displayItem = document.createElement("li");
      displayItem.innerHTML = `${storedItem}: ${storedValue}   `
      displayItem.appendChild(removeButton)
      displayItem.setAttribute("id", storedItem)
      removeButton.setAttribute("id", storedItem)
      console.log('removeButton:', removeButton)


      console.log('displayItem:', displayItem)

      ul.appendChild(displayItem);
    }
  };

  //!!                STORE ITEM FUNCTION                   //
  const form = document.querySelector('.form.form__container')

  const addButton = document.querySelector("#add-to-cart");
  // console.log('addButton:', addButton)

  const formItem = document.querySelector(".form__field-items")
  // console.log('formItem:', formItem.value)

  const formQuantity = document.querySelector(".form__field-quantity")

  const storeItem = () => {
    // console.log('formQuantity:', formQuantity.value)
    //!!storing item that is say an ARRAY, you would JSON stringify into the value
    form.addEventListener("submit", event => {
      // event.preventDefault();
      let key = formItem.value
      localStorage.setItem(key, formQuantity.value)
      // console.log(localStorage.getItem("Apple"))

    });
    showCart();

  };




  //!!                    REMOVE ITEM FUNCTION               //

  const removeItem = () => {




  };

  storeItem();
});
