function detectMobileScreen() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ratio = window.devicePixelRatio || 1;

  // Détection basée sur les dimensions de l'écran
  const isMobileScreen =
    (width <= 768 || height <= 768) &&
    (ratio >= 1 && ratio <= 4); // Évite les très grands écrans type TV ou Retina

  // Détection basée sur l'User-Agent
  const isMobileUA = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);

  if (isMobileScreen || isMobileUA) {
    console.log("✅ Écran de téléphone détecté !");
    // Ajoute une classe à l’élément <body>, utile pour du CSS mobile
    document.body.classList.add("mobile-view");

    // Tu peux aussi lancer une fonction spécifique ici si tu veux
    // ex: initMobileUI();
  } else {
    console.log("ℹ️ Écran non mobile détecté.");
  }

  // Affichage des infos utiles pour debug
  console.log("📏 Largeur : " + width + "px");
  console.log("📐 Hauteur : " + height + "px");
  console.log("🔍 Densité pixel : " + ratio);
}

// Exécuter la détection au chargement
window.addEventListener("load", detectMobileScreen);
// Et lors d’un redimensionnement (rotation, pliage, split screen, etc.)
window.addEventListener("resize", detectMobileScreen);
