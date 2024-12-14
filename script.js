function redirecionar(){
    window.location.href = "servicos.html";
}

// constantes para a visibilidade
const senhaInput = document.querySelector('.senha'); 
const IconeVisibilidade = document.querySelector('.visibilidade'); 

IconeVisibilidade.addEventListener('click', function () {
    // é senha?
    const tipoSenha = senhaInput.type === 'password';

    // Alterna o tipo entre 'password' e 'text'
    senhaInput.type = tipoSenha ? 'text' : 'password';

    // muda o ícone entre olho aberto e fechado
    IconeVisibilidade.innerHTML = tipoSenha
        ? '<i class="bi bi-eye-slash"></i>'
        : '<i class="bi bi-eye"></i>';
});
