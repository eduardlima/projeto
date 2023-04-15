document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    validarLogin(); 
  });

function login(){
  const email = document.getElementById("email").value;
  const senha = document.getElementById('senha').value;

  if (email === 'usuario@exemplo.com' && senha === '123456') {
   
    window.location.href = "home.html";

  } else {

    alert('Credenciais inválidas. Por favor, tente novamente.');
  }
}
