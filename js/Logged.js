          // Import the functions you need from the SDKs you need
          import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
          import { getDatabase , ref , update } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
          import { getAuth , signInWithEmailAndPassword , onAuthStateChanged ,   sendEmailVerification ,signOut  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
        
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
      
        const user = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(user);
            document.getElementById("logged").innerHTML = "";
            var name = document.createElement("p");
            name.style.margin = "auto";
            name.style.color = "blue";
            name.innerHTML = user.displayName ;
            document.getElementById("logged").appendChild(name);
            var logout = document.createElement("button");
            logout.style.margin = "5px";
            logout.id = "Logout";
            logout.innerHTML = "Logout";
            logout.onclick = function(){
              signOut(auth).then(() => {
                alert("User Logged Out");
                location.reload();
              }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
              });           
            }
            document.getElementById("logged").appendChild(logout);
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
      