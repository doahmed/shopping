	      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
        import { getDatabase  , ref ,onValue} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
        import { getAuth   } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
        
          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries
        
          // Your web app's Firebase configuration
          const firebaseConfig = {
            apiKey: "AIzaSyC8eT3yVKJtw3KX0O1EXxjcWGifhne2yD8",
            authDomain: "rad-signup-form.firebaseapp.com",
            projectId: "rad-signup-form",
            storageBucket: "rad-signup-form.appspot.com",
            messagingSenderId: "218337798556",
            appId: "1:218337798556:web:8e74f666ff3c2984a94059"
          };
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          
          const database = getDatabase(app);
          const auth = getAuth();

          var fn = function () {
            onValue(ref(database, '/Products/'), (snapshot) => {
                 var products = snapshot.val();
                 
                 var prod = document.getElementById("recent_Products");
                 for (var product of products){

                 var prod_child = document.createElement("div");
                 prod_child.setAttribute("class","col-lg-3 col-md-4 col-sm-6 pb-1");
                 var prod_gr_child = document.createElement("div");
                 prod_gr_child.setAttribute("class","product-item bg-light mb-4");
                 var prod_img = document.createElement("div");
                 prod_img.setAttribute("class","product-img position-relative overflow-hidden");
                 var img = document.createElement("img");
                 img.setAttribute("class","prod_img img-fluid w-100");
      
                 img.setAttribute("src",product.Image);//note
                 var img_div =  document.createElement("div");
                 img_div.setAttribute("class","product-action");
                 var action_link = document.createElement("a");
                 action_link.setAttribute("class" , "btn btn-outline-dark btn-square");
                 action_link.setAttribute("href" , "#");//note
                 
                 var prod_i = document.createElement("i");
                 prod_i.setAttribute("class" , "fa fa-shopping-cart");
                 action_link.appendChild(prod_i);
                 img_div.appendChild(action_link);
                 prod_img.appendChild(img);
                 prod_img.appendChild(img_div);
                 var text_div = document.createElement("div");
                 text_div.setAttribute("class","text-center py-4");
                 var prod_name = document.createElement("a");
                 prod_name.setAttribute("class" , "h6 text-decoration-none text-truncate");
                 prod_name.setAttribute("href" , "#");
                 prod_name.innerHTML = product.Title;
                 var price = document.createElement("div");
                 price.setAttribute("class","d-flex align-items-center justify-content-center mt-2");
                 var price_1 = document.createElement("h5");
                 price_1.innerHTML = product.Price;
                 var price_2 = document.createElement("h6");
                 price_2.setAttribute("class" , "text-muted ml-2");
                 var price_3 = document.createElement("del");
                 price_3.innerHTML = product.Price;
                 price_2.appendChild(price_3);
                 price.appendChild(price_1);
                 price.appendChild(price_2);
                 var text_div = document.createElement("div");
                 text_div.setAttribute("class","text-center py-4");
                 var rating = document.createElement("div");
                 rating.setAttribute("class" , "d-flex align-items-center justify-content-center mb-1");
                 
                 var star = document.createElement("small");
                 star.setAttribute("class" , "fa fa-star text-primary mr-1");
         
                 var star_num = document.createElement("small");
                 star_num.innerHTML = "(99)";

                 rating.appendChild(star);
       
                  

                 rating.appendChild(star_num);

                 text_div.appendChild(prod_name);
                 text_div.appendChild(price);
                 text_div.appendChild(rating);

                 prod_gr_child.appendChild(prod_img);
                 prod_gr_child.appendChild(text_div);
                 prod_child.appendChild(prod_gr_child);
                 prod.appendChild(prod_child);
                 
                 }

            });

            }

            fn();
            