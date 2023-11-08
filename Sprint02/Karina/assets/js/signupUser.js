const formSignUpUser = document.getElementById('formSignUpUser')

formSignUpUser.addEventListener('submit',async(e)=>{
    e.preventDefault()

    const usuario = document.getElementById ('usuario').value
    const nome = document.getElementById ('nome').value
    const idade = document.getElementById ('idade').value
    const foto = document.getElementById ('foto').value
    const telefone = document.getElementById ('telefone').value
    const email = document.getElementById ('email').value
    const senha = document.getElementById ('senha').value
    const usuarios = await api.get('usuarios')

    const usuarioExiste = usuarios.some(u => u.usuario === usuario || u.email === email)

    if (usuarioExiste) {
        alert('Usuário ou email já cadastrado')
        return
    }
    
    const signUpData = {
        usuario: usuario,
        nome: nome,
        idade: idade,
        foto: foto,
        telefone: telefone,
        email: email,
        empresa: false,
        senha: senha,
    }

    await api.post('usuarios', signUpData);
    window.location.href = "../../signin.html"
})





