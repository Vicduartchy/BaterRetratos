document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o redirecionamento padrão.

    // Captura os dados do formulário
    const formData = new FormData(this);

    // Envia os dados para o Google Forms
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSeGjNyTvAwAFyERPkWVuLMIJnp_Xj_FxlV8F_9okEhG7M0wjQ/formResponse", {
        method: "POST",
        mode: "no-cors", // Permite o envio sem redirecionar.
        body: formData
    })
    .then(() => {
        // Exibe mensagem de sucesso
        document.getElementById("formMessage").style.display = "block";

        // Limpa os campos do formulário
        this.reset();
    })
    .catch((error) => {
        console.error("Erro ao enviar o formulário:", error);
    });
});
