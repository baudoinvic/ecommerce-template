var addTocartButton = document.getElementById("add-to-cart-button");
 
var cartContainer = document.getElementById("cart-container");

addTocartButton.addEventListener("click",
 function(){
    var cartItem = document.createElement("div");
    cartItem.innerHTML = "Item Name";
    cartContainer.appendChild(cartItem);
 }

)
 
  