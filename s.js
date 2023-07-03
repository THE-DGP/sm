let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');

    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');

    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 10,
    
    autoplay:{
        delay: 6500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    
    if(name.value.length == 0){
        alert('Please fill in email');
    
    }else if(pw.value.length == 0){
        alert('Please fill in password');
    
    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');
    
    }else if(pw.value.length > 8){
        alert('Max of 8');
    
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');
    
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');
    
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
    
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
    }

function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");
    
    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');

    }else{
        alert('Error on login');
        return false;
    }
    }

    const itemsContainer = document.querySelector('.items-container');
const totalElement = document.querySelector('.total');
const btnCheckout = document.querySelector('.btn');



// Render cart items
function renderCartItems() {
    itemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('box');
        itemDiv.innerHTML = `
            <i class="fa fa-trash"></i>
            <img src="${item.image}">
            <div class="content">
                <h3>${item.name}</h3>
                <span class="price">$${item.price.toFixed(2)}</span>
                <span class="quantity">Qty : ${item.quantity}</span>
            </div>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}

// Update cart total
function updateCartTotal() {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalElement.innerHTML = `total : $${total.toFixed(2)}/-`;
}

// Add item to cart
function addItemToCart(item) {
    const existingItem = cartItems.find(i => i.id === item.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push(item);
    }
    renderCartItems();
    updateCartTotal();
}

// Event listener for adding item to cart
document.addEventListener('click', e => {
    if (e.target && e.target.classList.contains('add-to-cart')) {
        const itemId = e.target.dataset.itemId;
        const item = {
            id: itemId,
            name: e.target.dataset.itemName,
            price: parseFloat(e.target.dataset.itemPrice),
            quantity: 1,
            image: e.target.dataset.itemImage
        };
        addItemToCart(item);
    }
});

// Initialize cart
renderCartItems();
updateCartTotal();


    /*dict={}
        dict1={}
        function tryy(get_id,rs){
            // const p=document.createElement("p");
            // const txt=document.createTextNode("hi dev");
            // p.appendChild(txt);
            // const ele=document.getElementById('nn');
            const ele1=document.getElementById('nn');
            ele1.innerHTML='';
            // ele.appendChild(p);
            const div=document.createElement('div');
            let i_rs;
            if(get_id in dict){
                dict[get_id]+=1;
                i_rs=dict[get_id];  
            }
            else{
                dict[get_id]=1;
                i_rs=1;
                dict1[get_id]=rs;
            }
            let sum=0;
            for(let i in dict){

                const p=document.createElement("img");
                p.src=i;
                // p.appendChild(txt);
                p.className="btn";
                div.appendChild(p);
                const total=dict[i]*dict1[i];
                sum+=total;
                const tt=document.createElement("p");
                const br=document.createElement("br");
                const txt=document.createTextNode(total);
                const txt2=document.createTextNode(`${dict[i]}x${dict1[i]}`);
                tt.appendChild(txt2);
                tt.appendChild(br);
                tt.appendChild(txt);
                div.appendChild(tt);
                // const ele=document.getElementById('cart');
                // ele.appendChild(p);
                ele1.appendChild(div);
            }
            const tt=document.createElement('span');
            const wr=document.createTextNode(sum);
            const fin=document.getElementById("total");

            fin.innerHTML='';
            fin.appendChild(document.createTextNode("Total $"));
            fin.appendChild(wr);
            // alert(get_id);
        }*/
    
/*let carts = document.getElementById('.add-cart');

int products=[
    {
        name:'NEVER FAR AWAY',
        tag: 'neverfaraway',
        price: 20,
        inCart: 0
    },
    {
        name:'SPRING PARADE',
        tag: 'springparade',
        price: 20,
        inCart: 0
    },
    {
        name:'CAPRIOLE',
        tag: 'capriole',
        price: 20,
        inCart: 0
    },
    {
        name:'FRIENDSHIPS',
        tag: 'friendships',
        price: 20,
        inCart: 0
    },
    {
        name:'SPRING SONATA',
        tag: 'springsonata',
        price: 20,
        inCart: 0
    },
    {
        name:'MADRIGAL',
        tag: 'madrigal',
        price: 20,
        inCart: 0
    },
    {
        name:'PEACE AND HARMONY',
        tag: 'peaceandharmony',
        price: 20,
        inCart: 0
    },
    {
        name:'SERENITY',
        tag: 'serenity',
        price: 20,
        inCart: 0
    },
    {
        name:'CELEBRATIONS',
        tag: 'celebrations',
        price: 20,
        inCart: 0
    },
];

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers ){
        document.querySelector('.fa fa-shopping-cart span').textContent=productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers ){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.fa fa-shopping-cart span').textContent=productNumbers+1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.fa fa-shopping-cart span').textContent=1;
    }   
    setItems(product);
}

function setItems(product){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    product.inCart=1;
    if(cartItems!=null){
        cartItems[product.tag].inCart+=1;
    }
    else{
        product.inCart=1;
        cartItems={
            [product.tag]:product
        }
        
    }
    
    localStorage.setItem("productsInCart",cartItems);
}

onLoadCartNumbers();*/
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


