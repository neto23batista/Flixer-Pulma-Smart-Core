document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validação simples (substitua por autenticação real conforme necessário)
    if (username === 'pumasmartcore@senai.edu.br' && password === '311024') {
        // Aqui você pode redirecionar o usuário para outra página
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos.';
    }
});
