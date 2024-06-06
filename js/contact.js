document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput = document.querySelector('#nome');
    var emailInput = document.querySelector('#email');
    var messageInput = document.querySelector('#message');

    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;

    // Verifica se todos os campos estão preenchidos
    if (name && email && message) {
        alert('Todos os campos foram preenchidos. A mensagem seria enviada agora.');
        
        // Limpa os campos de entrada
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});