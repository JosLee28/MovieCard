const start = () => {
  btnHamburger();
};

function btnHamburger() {
  const $btn = document.getElementById("btn-hamburger");
  document.addEventListener("click", (e) => {
    if (
      e.target.matches("#btn-container") ||
      e.target.matches("#btn-container *")
    ) {
      $btn.classList.toggle("is-active");
    }
  });
}

start();
