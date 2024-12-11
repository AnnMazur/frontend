const modal = document.getElementById("modal");
const linkBlocks = document.querySelectorAll(".link-block"); // Получаем все элементы с классом Link-block
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

//ФОРМА
linkBlocks.forEach((linkBlock) => {
  linkBlock.onclick = function () {
    modal.style.display = "block";
  };
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const formData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  date: "",
  comment: "",

  printData: function () {
    console.log("Имя: " + this.fullName);
    console.log("E-mail: " + this.email);
    console.log("Телефон: " + this.phone);
    console.log("Страна: " + this.phone);
    console.log("Дата: " + this.date);
    console.log("Комментарий: " + this.comment);
  },
};

function submitForm(event) {
  event.preventDefault();
  const form = document.forms["forma"];

  formData.fullName = form.fullName.value;
  formData.email = form.email.value;
  formData.phone = form.phone.value;
  formData.country = form.country.value;
  formData.date = form.date.value;
  formData.comment = form.comment.value;

  if (!formData.fullName || !formData.email || !formData.comment) {
    alert("Поля Имя, E-mail и Комментарий не могут быть пустыми.");
    return;
  }

  if (!/^\d+$/.test(formData.phone)) {
    alert("Поле Телефон должно содержать только цифры.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Введите корректный E-mail.");
    return;
  }
  formData.printData();
}
document.querySelector("form").addEventListener("submit", submitForm);
document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('successMessage').classList.remove('hidden');
        introText.style.display = 'none';
        successMessage.style.display = 'block';
        setTimeout(function() {
            modal.style.display = 'none';
        }, 3000); // Закрытие через 3 секунды
    });

