let cart = [];
let total = 0;

function addToCart(price) {
  cart.push(price);
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((price) => {
    const li = document.createElement("li");
    li.textContent = `₹${price}`;
    cartItems.appendChild(li);
  });

  const totalElement = document.getElementById("total");
  totalElement.textContent = total;

  const cartElement = document.getElementById("cart");
  cartElement.style.display = "block";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#fff";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "#fff";
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}