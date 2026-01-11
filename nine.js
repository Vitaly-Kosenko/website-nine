// Отримуємо елементи
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.getElementsByClassName("close")[0];

// Функція для відкриття модального вікна
document.querySelectorAll(".thumbnail, .thumbnail2").forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "flex";  // Відкриваємо модальне вікно
    modalImage.src = this.src;    // Встановлюємо джерело зображення в модальному вікні
  });
});

// Закриття модального вікна
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Закриття модального вікна при натисканні поза ним
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  // Ініціалізація Video.js
        const player = videojs('myPlayer');
        // Підключення плагіна для вибору якості
player.httpSourceSelector();



// Функція зміни мови
function changeLanguage(lang) {
    document.querySelectorAll('.navbar2 ul li a').forEach((link) => {
        link.textContent = link.getAttribute(`data-${lang}`);
    });
    localStorage.setItem('language', lang); // Зберігаємо вибір мови
}

// Обробка кліків на кнопках
document.getElementById('languageSwitcher').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
      const lang = event.target.getAttribute('data-lang');
      changeLanguage(lang);
  }
});