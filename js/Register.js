          // Import the functions you need from the SDKs you need
          import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
          import { getDatabase , set , ref } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
          import { getAuth , createUserWithEmailAndPassword ,  updateProfile , onAuthStateChanged , sendEmailVerification , signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
        
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
          document.getElementById("register_submit").addEventListener('click' , (e)=>{
                var email = document.getElementById("register-email").value;
                var password = document.getElementById("register-password").value;
                var username  = document.getElementById("register-User").value ;
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                set(ref(database,'users/'+ user.uid ) , 
                {
                  username : username ,
                  email : email
                }
                )
                console.log(username);
                updateProfile(user , {displayName : username});
                console.log(user);
                sendVerificationEmail();
                alert("User Created , Eamil Verification Sent");
                window.location.assign("index.html");
                // ...
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
                });
        });
        const sendVerificationEmail = ()=>{
          sendEmailVerification(auth.currentUser);
        };
        const user = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;            
            document.getElementById("logged").innerHTML = user.displayName ; 
            var logout = document.createElement("button");
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