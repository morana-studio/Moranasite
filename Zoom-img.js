// Récupérer tous les éléments d'image de la galerie
const galleryImages = document.querySelectorAll('.gallery-img');

// Récupérer le modal et son contenu
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const closeModal = document.getElementById('closeModal');

// Ajouter un écouteur d'événement pour chaque image
galleryImages.forEach(image => {
  image.addEventListener('click', function() {
    // Ouvrir le modal et afficher l'image cliquée
    modal.style.display = "block";
    modalImg.src = this.dataset.full;
    caption.textContent = this.alt;  // Afficher l'alt de l'image dans le caption
  });
});

// Fermer le modal lorsque l'on clique sur la croix
closeModal.addEventListener('click', function() {
  modal.style.display = "none";
});

// Fermer le modal lorsqu'on clique en dehors de l'image
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
