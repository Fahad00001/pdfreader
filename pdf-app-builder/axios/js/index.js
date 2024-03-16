window.onload = async function () {
    var products = document.getElementById("products");
    // show loader
    products.innerHTML='<i class="ri-loader-2-fill text-6xl fixed  top-[45%] left-[45%] fa-spin"></i>'
    // return false
  var response = await axios.get("https://fakestoreapi.com/products");
//   loader hide
  products.innerHTML=""
//   preparing ui
  var data = response.data;
//   var products = document.getElementById("products");
  for (var product of data) {
    var div = `
    <div class="w-full animate__animated animate animate__pulse">
    <img src="${product.image}" class="w-full h-[264px] object-cover"/>
    <div class="p-5">
    <h1 class="text-lg font-semibold">${product.title}</h1>
    <p class="text-gray-500">${product.description.slice(0, 50)}...</p>
    <div class="mt-4 flex gap-2">
    <p>Rs${product.price}(50% off)</p>
    <del>${product.price*2}</del>
    </div>
    <div class="mt-4">
    <button class="bg-indigo-600 text-white px-4 py-2 font-semibold rounded">
    <i class="ri-money-rupee-circle-fill"></i>
   <label>Buy NOW</label>
    </button>
    <button class="bg-indigo-400 text-white px-4 py-2 font-semibold rounded">
    <i class="ri-shopping-cart-fill"></i>
   <label>Add to cart</label>
    </button>
    </div>
    </div>
    
    </div>
    `;
    products.innerHTML += div;
  }
};
