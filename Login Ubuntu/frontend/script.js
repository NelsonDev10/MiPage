const toggleBtn = document.getElementById('togglePassword');
const passInput = document.getElementById('password');

toggleBtn.addEventListener('click', () => {
  const type = passInput.type === 'password' ? 'text' : 'password';
  passInput.type = type;
});

const loginForm = document.getElementById('loginForm');
const errorMsg  = document.getElementById('errorMsg');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { username, password } = e.target.elements;

  if (username.value === 'vintage' && password.value === 'clave') {
    errorMsg.textContent = '';
    alert('Bienvenido al sistema clásico 🧳');
  } else {
    errorMsg.textContent = 'Credenciales incorrectas. Intenta nuevamente.';
  }
});
