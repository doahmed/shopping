let products = {
  data: [
    
    {
      productName: "Women Tshirt",
      category: "Women",
      price: "13.99",
      image: "img/1687857385e8891a2efed33f800a7c79188f7c5ed3_thumbnail_600x.jpg",
    },

    {
      productName: "Men Casual Tshirt",
      category: "Men",
      price: "15",
      image: "https://imagizer.imageshack.com/img923/552/IHXHc6.jpg",
    },
   
    {
      productName:  "Women Blouse",
      category: "Women",
      price: "21.99",
      image: "https://imagizer.imageshack.com/img923/5352/ACe6Fr.jpg",
    },
    {
      productName:  "Women Blouse",
      category: "Women",
      price: "21.99",
      image: "https://imagizer.imageshack.com/img923/5352/ACe6Fr.jpg",
    },
    {
      productName:  "Women Blouse",
      category: "Women",
      price: "21.99",
      image: "https://imagizer.imageshack.com/img923/5352/ACe6Fr.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
window.onload = () => {
  filterProduct("all");
};