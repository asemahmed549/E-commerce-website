const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const sliderPrice = document.querySelectorAll(".sliderPrice");
const closeBtn = document.querySelector(".close");
const butNowBtn = document.querySelector(".productButton");
const paymentBox = document.querySelector(".payment");
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "./img/air.png" },
      { code: "darkblue", img: "./img/air2.png" },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      { code: "lightgray", img: "./img/jordan.png" },
      { code: "green", img: "./img/jordan2.png" },
    ],
  },
  {
    id: 3,
    title: "Air Blazer",
    price: 109,
    colors: [
      { code: "lightgray", img: "./img/blazer.png" },
      { code: "green", img: "./img/blazer2.png" },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      { code: "black", img: "./img/crater.png" },
      { code: "lightgray", img: "./img/crater2.png" },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      { code: "gray", img: "./img/hippie.png" },
      { code: "black", img: "./img/hippie2.png" },
    ],
  },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // wrapper.style.tranform = `translateX(${-100 * index}vw)`;
    // wrapper.getElementsByClassName.tra
    sliderPrice.forEach((price, index) => {
      price.textContent = "$" + products[index].price;
    });
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change choosen product
    choosenProduct = products[index];
    //change text
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // currentProductColor.
    currentProductColor.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
// currentProductColor.addEventListener("click", (index) => {
//   currentProductImg.src = choosenProduct[index].img;
// });
currentProductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

closeBtn.addEventListener("click", () => {
  // paymentBox.remove();
  paymentBox.style.display = "none";
});

butNowBtn.addEventListener("click", () => {
  // paymentBox.classList.add(".payment");
  paymentBox.style.display = "flex";
});
