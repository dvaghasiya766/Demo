document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#guestPanelCarousel");
  const progressBar = document.querySelector(".progress-bar");
  const slideDuration = 5000; // Duration of each slide in milliseconds (adjust as needed)

  let interval;

  // Function to start the progress bar animation
  function startProgressBar() {
    progressBar.style.width = "0%";
    let width = 0;
    interval = setInterval(() => {
      width += 1;
      progressBar.style.width = `${width}%`;
      if (width >= 100) {
        clearInterval(interval);
      }
    }, slideDuration / 100);
  }

  // Start progress bar when the carousel is initialized
  startProgressBar();

  // Reset and restart progress bar on slide change
  carousel.addEventListener("slid.bs.carousel", function () {
    clearInterval(interval);
    startProgressBar();
  });

  // Pause progress bar on hover
  carousel.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });

  // Resume progress bar on hover out
  carousel.addEventListener("mouseleave", function () {
    startProgressBar();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel-control-prev");
  const nextButton = document.querySelector(".carousel-control-next");

  // Add click feedback for previous button
  prevButton.addEventListener("click", function () {
    prevButton.classList.add("active");
    setTimeout(() => prevButton.classList.remove("active"), 300);
  });

  // Add click feedback for next button
  nextButton.addEventListener("click", function () {
    nextButton.classList.add("active");
    setTimeout(() => nextButton.classList.remove("active"), 300);
  });
});
