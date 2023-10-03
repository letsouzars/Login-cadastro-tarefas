const form = document.querySelector('.login-form')

const usernameInput = form.querySelector('input[type="text"]');

const senhaInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = usernameInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuario === '' || senha === '') {
        alert('Por favor, preencha os campos.')
    } else if (usuario === 'usuario' && senha === 'senha') {
        alert('Bem-vindo!')
        location.replace("/Tarefa/indexT.html", "_self");
    } else {
        alert('Usario ou senha incorreto, tente novamente')
    }
})