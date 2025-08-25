// Получаем элементы
const modal = document.getElementById("modal");
const modal1 = document.getElementById("modal1");
const loginBtn = document.querySelector(".btn-login"); // Используем класс btn-login
const regBtn = document.querySelector(".btn-register")
const closeBtn = document.querySelector(".close-btn");
const body = document.querySelector("body");
const overlay = document.getElementById('overlay');

// Открытие модального окна
loginBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // Показать модальное окно
  modal.style.flexDirection = "column"; // Добавляем flex-column
  overlay.style.display = "block"; // Показать затемнение
});

regBtn.addEventListener("click", () => {
  modal1.style.display = "flex"; // Показать модальное окно
  modal1.style.flexDirection = "column"; // Добавляем flex-column
  overlay.style.display = "block"; // Показать затемнение
});

// Закрытие модального окна при нажатии на кнопку закрытия
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Скрыть модальное окно
  overlay.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  modal1.style.display = "none"; // Скрыть модальное окно
  overlay.style.display = "none";
});

// Закрытие модального окна при клике на затемненный фон
window.addEventListener("click", (event) => {
  if (event.target === overlay) {
    modal.style.display = "none"; // Скрыть модальное окно
    overlay.style.display = "none";
  }
});

window.addEventListener("click", (event) => {
  if (event.target === overlay) {
    modal1.style.display = "none"; // Скрыть модальное окно
    overlay.style.display = "none";
  }
});
