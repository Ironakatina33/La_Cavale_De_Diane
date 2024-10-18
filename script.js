// Récupérer les éléments de la modale
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const openModalLink = document.getElementById("openModal");
const closeModal = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur l'image, ouvrir la modale et afficher l'image
openModalLink.onclick = function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    modal.style.display = "block"; // Affiche la modale
    modalImage.src = event.target.src; // Définit la source de l'image modale
}

// Lorsque l'utilisateur clique sur (x), fermer la modale
closeModal.onclick = function() {
    modal.style.display = "none"; // Cache la modale
}

// Lorsque l'utilisateur clique en dehors de l'image, fermer la modale
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Cache la modale
    }
}