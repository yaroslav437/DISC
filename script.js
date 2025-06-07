document.addEventListener("DOMContentLoaded", function() {
    let loginBtn = document.getElementById("login-btn");
    let modal = document.getElementById("login-modal");
    let closeBtn = document.querySelector(".close");

    // Ouvrir la boîte de connexion
    loginBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Fermer la boîte quand on clique sur la croix
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Fermer si on clique en dehors
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
