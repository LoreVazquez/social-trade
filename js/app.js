
  //Obtner elementos
   const txtEmail = document.getElementById("txtEmail");
   const txtPassword = document.getElementById("txtPassword");
   const signupEmail = document.getElementById("signupEmail");
   const signupPassword = document.getElementById("signupPassword");
   const btnLogin = document.getElementById("log-in");
   const btnSignUp = document.getElementById("sign-up");
  
  //Agregar evento login
  btnLogin.addEventListener("click", e => {
      //Obtener email y contrasena
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //Sign-in
      const promise = auth.signInWithEmailAndPassword(email,pass);
      promise.catch(function(error) {
      // Handle Errors here.
        var errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
            alert('Contraseña incorrecta.');
        } else if(errorCode === 'auth/user-not-found') {
            alert('Usuario no registrado');
        } else if(errorCode === 'auth/invalid-email'){
            alert('E-mail inválido');
        }
        console.log(error);
        });

        var user = firebase.auth().currentUser;
        if(user != null){
            //user is signed in
            window.location.href = 'paginas/perfil.html?uid='+ user.uid;
            console.log(user);
        }         
  });

  //Agregar evento a Sign-up
  btnSignUp.addEventListener('click', e => {
      //Obtener email y contrasena
       const email = signupEmail.value;
       const pass = signupPassword.value;
       const auth = firebase.auth();
       //Sign-in
       const promise = auth.createUserWithEmailAndPassword(email,pass);
       promise.catch(e => console.log(e.message));
  });

  // Obtener el usuario con sesion activa


  //Modal de registro
  $(document).ready(function(){
    $('.modal').modal();
  });