window.addEventListener("DOMContentLoaded", (event) => {


  //!!                   SHOW CART ITEM                         //

  const showCart = () => {




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
      event.preventDefault();
      let key = formItem.value
      localStorage.setItem(key, formQuantity.value)
      // console.log(localStorage.getItem("Apple"))

    });



  };



  //!!                    REMOVE ITEM FUNCTION               //

  // const removeItem = () => {

  // };


  storeItem();
});
