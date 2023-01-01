// Get the modal
var modal = document.querySelector(".modal");
var modalImg = document.querySelector(".modal-content");
var captionText = document.querySelector("caption");
Array.from(document.querySelectorAll(".feature-image, .feature-image2, .feature-image3")).forEach(item => {
  item.addEventListener("click", event => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
  });
});

// When the user clicks image or modal, close the modal
document.querySelector(".modal").addEventListener("click", () => {
  modal.style.display = "none";
});