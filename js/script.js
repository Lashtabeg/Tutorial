// При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// вивести значення, яке будемо вводити в інпут.

// 1.Знайти кнопку
// 2.Знайти Инпут
// 3.Повісити слухачаподії
// 4.ПРи події вивести в Алєрт

// const btn =document.getElementById(`alertButton`);
// const input = document.querySelector('#alertInput');
// console.dir(input)
// btn.addEventListener(`click`, onClick);
// function onClick(){alert(input.value)

// };

// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const btn =document.getElementById(`passwordButton`);
// const input = document.querySelector('#passwordInput');
// btn.addEventListener(`click`, onClick);

// function onClick() {
//   if (input.type==="text") {
//     input.type ='password';
//     btn.textContent = "Показати"
//   }
//   else{
//     input.type ='text';
//     btn.textContent = "Приховати"
//   }
// }

// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.
// 1.Достукатись до єлементів
// 2.Додавти прослувача подій

// const box = document.getElementById(`box`);
// const btnDec = document.querySelector(`#decrease`);
// const btnInc = document.querySelector(`#increase`);
// btnDec.addEventListener(`click`, onClick);
// btnInc.addEventListener(`click`, onClick);

// function onClick(event) {
//     const {offsetWidth, offsetHeight} = box;
// const id = event.currentTarget.id;
// console.dir(box);
// if(id=== `increase`){
//     box.style.width = `${offsetWidth+10}px`;
//     box.style.height = `${offsetHeight+10}px`;
//     return
// }
// box.style.width = `${offsetWidth-10}px`;
//     box.style.height = `${offsetHeight-10}px`;
//     return

// }

// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const input = document.querySelector(`.contactsFilter`);
// const list = document.querySelector(`.contacts`);
// const items = [...list.children];

// input.addEventListener(`input`, onChange);

// function onChange(event){
//     const value = event.target.value.toLowerCase();
//     const filtredItems =items.filter(el => el.textContent.toLowerCase().includes(value));
//     list.innerHTML = ``;
//     list.append(...filtredItems);
// }

//===================================================

// const products = [
//   "телевізор_Samsung",
//   "телевізор_LG",
//   "телевізор_Xiaomi",
//   "телефон_Samsung",
//   "телефон_Apple",
//   "телефон_Xiaomi",
//   "планшет_Samsung",
//   "планшет_Apple",
//   "планшет_Xiaomi",
//   "ноутбук_ASUS",
//   "ноутбук_Apple",
//   "ноутбук_Lenovo",
// ];

// input.addEventListener("input", _.throttle(checkList, 500));
// function checkList(e) {
//   list.innerHTML = "";
//   const value = e.target.value.toLowerCase();
//   if (!value) return;
//   const items = products.filter((el) => el.toLowerCase().includes(value));
//   list.append(...murkup(items));
// }

// function murkup(items) {
//   return items.map((el) => {
//     const item = document.createElement("li");
//     const btn = document.createElement("button");
//     const text = document.createElement("p");
//     btn.textContent = "Додати у кошик";
//     text.textContent = el;
//     item.append(text, btn);
//     return item;
//   });
// }

// const input = document.getElementById("searchInput");
// const list = document.getElementById("itemsContainer");
// const listCart = document.getElementById("cartItemsContainer");

// list.addEventListener("click", onClick);
// function onClick(e) {
//   if (e.target.nodeName !== "BUTTON") return;
//   // listCart.append(e.target.parentNode)
//   const item = document.createElement("li");
//   const btn = document.createElement("button");
//   btn.addEventListener("click", (e) => e.target.parentNode.remove());
//   const text = document.createElement("p");
//   btn.textContent = "Видалити";
//   text.textContent = e.target.previousElementSibling.textContent;
//   item.append(text, btn);
//   listCart.append(item);
// }

//===================================================

// Додай функціонал зміни теми при натисканні(подія change) на чекбокс
// #theme-switch-toggle у тулбарі.
// За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент body клас light-theme або dark-theme.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки.
// Для зберігання теми використовуй localStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити властивість checked
// у чекбоксу #theme -switch-toggle у true, щоб повзунок зрушив у правильне положення.

// Для зручності зберігання списку використовуй такий перелік.
// const Theme = {
//   LIGHT: "light-theme",
//   DARK: "dark-theme",
// };

const input = document.getElementById("theme-switch-toggle");
const body = document.body;

input.addEventListener("change", onChange);

const savedTheme = localStorage.getItem("Theme");
// console.log(savedTheme);

if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === Theme.DARK) {
    input.checked = true;
  }
} else {
  body.classList.add(Theme.LIGHT);
}

function onChange(e) {
  if (e.currentTarget.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("Theme", Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem("Theme", Theme.LIGHT);
  }
}

//===================================================
// * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.

// const input = document.getElementById("theme-switch-toggle");
// const body = document.body;

// input.addEventListener("change", onChange);

// const savedTheme = localStorage.getItem("Theme");

// if (savedTheme) {
//   body.classList.add(savedTheme);
//   if (savedTheme === Theme.DARK) {
//     input.checked = true;
//   }
// } else {
//   body.classList.add(Theme.LIGHT);
// }

// function onChange(e) {
//   if (e.currentTarget.checked) {
//     body.classList.add(Theme.DARK);
//     body.classList.remove(Theme.LIGHT);
//     localStorage.setItem("Theme", Theme.DARK);
//   } else {
//     body.classList.add(Theme.LIGHT);
//     body.classList.remove(Theme.DARK);
//     localStorage.setItem("Theme", Theme.LIGHT);
//   }
// }
//===================================================

const userData = {
  email: "email@com",
  password: "111",
};

const formEl = document.getElementById("login-form");
formEl.addEventListener("submit", onSubmit);

const savedData = JSON.parse(localStorage.getItem("login"));

if (savedData) {
  formEl.elements.email.disabled = true;
  formEl.elements.password.disabled = true;
  formEl.elements.button.textContent = "Logout";
  formEl.elements.email.value = savedData.email;
  formEl.elements.password.value = savedData.password;
}
function onSubmit(event) {
  event.preventDefault();

  const emailValue = formEl.elements.email.value;
  const passValue = formEl.elements.password.value;

  if (savedData) {
    formEl.elements.email.disabled = false;
    formEl.elements.password.disabled = false;
    formEl.elements.button.textContent = "Login";
    localStorage.removeItem("login");
    formEl.reset();
    return;
  }

  if (emailValue !== userData.email || passValue !== userData.password) {
    return alert("Помилка!");
  }

  const data = {
    email: emailValue,
    password: passValue,
  };

  localStorage.setItem("login", JSON.stringify(data));

  formEl.elements.email.disabled = true;
  formEl.elements.password.disabled = true;
  formEl.elements.button.textContent = "Logout";
}
