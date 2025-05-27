function openModal(src, captionText) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    caption.innerHTML = captionText;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
