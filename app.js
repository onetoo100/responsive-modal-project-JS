const modalButton = document.querySelector(".btn-modal"),
  modal = document.querySelector(".modal"),
  closeBtn = document.querySelector(".modal-close");

modalButton.addEventListener("click", () => {
  modal.classList.add("modal-active");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("modal-active");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-active"))
    modal.classList.remove("modal-active");
});
