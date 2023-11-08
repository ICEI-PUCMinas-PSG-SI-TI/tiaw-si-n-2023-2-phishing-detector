const botaoLogin = document.getElementById('btnlogin');
const status = document.getElementById('status');

async function logar() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  status.style.display = 'block';
  
  const [usuarioExistente] = await api.get(`usuarios?usuario=${usuario}&senha=${senha}`);

  status.style.display = 'none';
  
  if (usuarioExistente != undefined) {
    sessionStorage.setItem('usuario', JSON.stringify(usuarioExistente))
    alert('Usuário Logado.')
  } else {
    alert('Usuário não existe.')
  }
}

botaoLogin.addEventListener('click', logar);