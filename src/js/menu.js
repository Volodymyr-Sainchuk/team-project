(() => {
  const refs = {
    // Додано атрибут data-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Додано атрибут data-menu-close на кнопку закриття
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Додано атрибут data-menu на бекдроп модалки
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.menu.classList.toggle("is-open");
  }
})();