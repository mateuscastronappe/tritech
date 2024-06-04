document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        var nome = document.getElementById("nome").value.trim();
        var email = document.getElementById("email").value.trim();
        
        if (nome !== "" && email !== "") {
            window.location.href = "bem-vindo.html";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});

