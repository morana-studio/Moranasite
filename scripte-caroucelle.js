let currentIndex = 0;

function changeImage(direction) {
  const images = document.querySelectorAll('.carrousel-images img');
  const totalImages = images.length;

  // Change the current index
  currentIndex = (currentIndex + direction + totalImages) % totalImages;

  // Move the images container
  const carrouselImages = document.querySelector('.carrousel-images');
  carrouselImages.style.transform = `translateX(-${currentIndex * 600}px)`;
}

// Optional: Change image every 3 seconds automatically
setInterval(() => {
  changeImage(1);
}, 3000);
