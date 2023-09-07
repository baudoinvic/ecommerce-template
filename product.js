var product = document.createElement("div");
 product.classList.add("product");

 var productImage = document.createElement("img");
 productImage.src = "product.jpg";
 productImage.alt = "product Name";

  var productName = document.createElement("h3");

   productName.innerHTML = "product name";
   var productPrice = document.createElement('p');

   productPrice.innerHTML = "$150";

   product.appendChild(productImage);
   product.appendChild(productName);
   product.appendChild(productPrice);
   
   var productsContainer = document.getElementById("products-container");
   productsContainer.appendChild(product);