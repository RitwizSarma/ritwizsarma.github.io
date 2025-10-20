document.addEventListener("DOMContentLoaded", function () {
  const cvButton = document.querySelector('a[href$="cv.html"]');
  if (!cvButton) return;

  // Detect if the device is mobile or tablet
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    cvButton.setAttribute("href", "cv-no-outline.html");
  }
});
