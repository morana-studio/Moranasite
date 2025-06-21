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


function detectXCover5() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ratio = window.devicePixelRatio || 1;
  const ua = navigator.userAgent || "";

  // Méthode 1 : User-Agent (plus fiable)
  const isUserAgentXCover5 = ua.includes("SM-G525");

  // Méthode 2 : Dimensions et ratio d'écran (fallback)
  const isScreenMatch =
    (width >= 350 && width <= 380) &&
    (ratio >= 2 && ratio <= 3.5) &&
    (height >= 640); // évite les anciens petits appareils

  if (isUserAgentXCover5 || isScreenMatch) {
    console.log("📱 Samsung Galaxy XCover 5 détecté !");
    document.body.classList.add("xcover5");

    // Tu peux lancer ici un code spécifique pour cet appareil
    // Exemple : personnalisation du design
  } else {
    console.log("ℹ️ Appareil différent détecté.");
  }
}

// Exécuter au chargement
window.addEventListener("load", detectXCover5);
// Et si redimensionnement (rotation, split screen…)
window.addEventListener("resize", detectXCover5);