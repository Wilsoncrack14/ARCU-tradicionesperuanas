document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Validar los campos del formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("contraseña").value;
  
    // Validar el campo de email
    if (!isValidEmail(email)) {
      alert("Por favor, ingresa un email válido.");
      return;
    }
  
    // Validar el campo de contraseña
    if (!isValidPassword(password)) {
      alert("Por favor, ingresa una contraseña válida con al menos 2 caracteres especiales.");
      return;
    }
  
    // Obtener el nombre del usuario
    var name = extractNameFromEmail(email);
  
    // Mostrar mensaje de bienvenida con el nombre del usuario
    var welcomeMessage = "¡Bienvenido, " + name + "!";
    alert(welcomeMessage);
  
    // Reiniciar el formulario
    this.reset();
  });
  
  function isValidEmail(email) {
    // Utilizar una expresión regular para validar el formato del email
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
  }
  
  function isValidPassword(password) {
    // Contar la cantidad de caracteres especiales en la contraseña
    var specialCharacters = password.match(/[^\w\s]/g) || [];
    return specialCharacters.length >= 2;
  }
  
  function extractNameFromEmail(email) {
    // Extraer el nombre de usuario antes del símbolo "@" en el email
    var atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      return email.slice(0, atIndex);
    }
    return "";
  }
  