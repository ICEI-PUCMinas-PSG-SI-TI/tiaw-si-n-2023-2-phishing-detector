const formSignUpUser = document.getElementById('formSignUpUser')

formSignUpUser.addEventListener('submit',async(e)=>{
    e.preventDefault()

    const cnpj = document.getElementById ('usuario').value
    const nome = document.getElementById ('nome').value
    const idade = document.getElementById ('idade').value
    const foto = document.getElementById ('foto').value
    const email = document.getElementById ('email').value
    const endereco = document.getElementById ('endereco').value
    const telefone = document.getElementById ('telefone').value
    const senha = document.getElementById ('senha').value
    const usuarios = await api.get('usuarios')

    const usuarioExiste = usuarios.some(u => u.usuario === cnpj || u.email === email)

    if (usuarioExiste) {
        alert('CNPJ ou email já cadastrado')
        return
    }
    
    const signUpData = {
        usuario: cnpj,
        nome: nome,
        idade: idade,
        foto: foto,
        email: email,
        endereco: endereco,
        telefone: telefone,
        empresa: true,
        senha: senha,
    }

    await api.post('usuarios', signUpData);
    window.location.href = "../../signin.html"
})