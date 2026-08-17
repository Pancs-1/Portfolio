const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close-modal");

const images = document.querySelectorAll(".zoomable");

images.forEach(function(image) {

    image.addEventListener("click", function() {

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modal.classList.add("active");

    });

});


closeButton.addEventListener("click", function() {

    modal.classList.remove("active");

});


modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});