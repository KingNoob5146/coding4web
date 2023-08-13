// JavaScript to toggle attributes/values of elements based on inputs
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("heading");
  const subheading = document.getElementById("subheading");
  const paragraph = document.getElementById("paragraph");
  const container = document.getElementById("container");
  const image = document.getElementById("image");
  const headingInput = document.getElementById("headingInput");
  const subheadingButton = document.getElementById("subheadingButton");
  const fontSelect = document.getElementById("fontSelect");
  const sizeRange = document.getElementById("sizeRange");
  const imageSelect = document.getElementById("imageSelect");

  headingInput.addEventListener("input", () => {
      heading.textContent = headingInput.value;
  });

  subheadingButton.addEventListener("click", () => {
      subheading.classList.toggle("hidden");
  });

  fontSelect.addEventListener("change", () => {
      paragraph.style.fontFamily = fontSelect.value;
  });

  sizeRange.addEventListener("input", () => {
      container.style.width = sizeRange.value + "px";
      container.style.height = sizeRange.value + "px";
  });

  imageSelect.addEventListener("change", () => {
      image.src = imageSelect.value;
  });
});

//Back to homepage button
document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("back-button");
  
    backButton.addEventListener("click", function() {
        // Use JavaScript to navigate back to the previous page
        window.history.back();
    });
  });