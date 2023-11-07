const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  const email = emailInput.value;
  const password = passwordInput.value;

  // Autenticar con Firebase
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Autenticación exitosa, puedes redirigir a la página deseada
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
      // Redirecciona a la página deseada aquí
      window.location.href = "General.html";
    })
    .catch((error) => {
      // Error en la autenticación, muestra un mensaje de error
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Error de autenticación. Verifica tu correo y contraseña.";
      errorMessage.style.display = "block"; // Mostrar el mensaje de error
    });
});
