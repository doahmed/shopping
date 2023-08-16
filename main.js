(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    
    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
// search
// function gid(a_id) {
//     return document.getElementById(a_id);
// }

// function close_all() {
    
//     for (i = 0; i < 999; i++) {
//         var o = gid("product_" + i);
//         if (o) {
//             o.style.display = "none";
//         }
//     }
    
// }
// function find_my_div() {
//     close_all();
    
//     var o_edit = gid("edit_search");
//     var str_needle = edit_search.value;
//     str_needle = str_needle.toUpperCase();
//     var searchStrings = str_needle.split(/\W/);
//     // I moved this loop outside
//     var nameDivs = document.getElementsByClassName("name");
//     for (var j = 0, divsLen = nameDivs.length; j < divsLen; j++) {
//         // set a counter to zero
//         var num = 0;
//         // I moved this loop inside
//         for (var i = 0, len = searchStrings.length; i < len; i++) {
//             var currentSearch = searchStrings[i].toUpperCase();
//             // only run the search if the text input is not empty (to avoid a blank)
//             if (str_needle !== "") {
//                 // if the term is found, add 1 to the counter
//                 if (nameDivs[j].textContent.toUpperCase().indexOf(currentSearch) !== -1) {
//                     num++;
//                 }
//                 // display only if all the terms where found
//                 if (num == searchStrings.length) {
//                     nameDivs[j].style.display = "block";
//                 }
                
//             }
//         }
//     }
// }

// let products = {
//     data: [
      
//       {
//         productName: "Women Tshirt",
//         category: "Women",
//         price: "13.99",
//         image: "https://imagizer.imageshack.com/img922/7216/TOTUUt.jpg",
//       },

//       {
//         productName: "Men Casual Tshirt",
//         category: "Men",
//         price: "15",
//         image: "https://imagizer.imageshack.com/img923/552/IHXHc6.jpg",
//       },
     
//       {
//         productName:  "Women Blouse",
//         category: "Women",
//         price: "21.99",
//         image: "https://imagizer.imageshack.com/img923/5352/ACe6Fr.jpg",
//       },
//     ],
//   };
  
//   for (let i of products.data) {
//     //Create Card
//     let card = document.createElement("div");
//     card.classList.add("card", i.category, "hide");
//     //image div
//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");
//     //img tag
//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     //container
//     let container = document.createElement("div");
//     container.classList.add("container");

//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);

//     let price = document.createElement("h6");
//     price.innerText = "$" + i.price;
//     container.appendChild(price);
  
//     card.appendChild(container);
//     document.getElementById("products").appendChild(card);
//   }
//   function filterProduct(value) {
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//       if (value.toUpperCase() == button.innerText.toUpperCase()) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     });
//     let elements = document.querySelectorAll(".card");
//     elements.forEach((element) => {
//       if (value == "all") {
//         element.classList.remove("hide");
//       } else {
//         if (element.classList.contains(value)) {
//           element.classList.remove("hide");
//         } else {
//           element.classList.add("hide");
//         }
//       }
//     });
//   }
//   document.getElementById("search").addEventListener("click", () => {
//     let searchInput = document.getElementById("search-input").value;
//     let elements = document.querySelectorAll(".product-name");
//     let cards = document.querySelectorAll(".card");
//     elements.forEach((element, index) => {
//       if (element.innerText.includes(searchInput.toUpperCase())) {
//         cards[index].classList.remove("hide");
//       } else {
//         cards[index].classList.add("hide");
//       }
//     });
//   });
//   window.onload = () => {
//     filterProduct("all");
//   };

})(jQuery);
