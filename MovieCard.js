const start = () => {
  btnHamburger();
};

function btnHamburger() {
  const $btn = document.getElementById("btn-hamburger");
  const $menu = document.getElementById("menu");
  document.addEventListener("click", (e) => {
    if (
      e.target.matches("#btn-container") ||
      e.target.matches("#btn-container *")
    ) {
      $btn.classList.toggle("is-active");
      $menu.classList.toggle("main-menu--responsive");
    }
  });
}

start();
