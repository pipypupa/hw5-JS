let select = prompt(
  "Зробіть ваше замовлення із запропонованих вам напоїв: Кава, Чай, Сік"
).toLowerCase();

switch (select) {
  case "кава":
    alert(
      "Дякуємо за замовлення, вашу каву вже роблять, зачекайте пару хвилин"
    );
    break;

  case "чай":
    alert("Дякуємо за замовлення, ваш чай вже роблять, зачекайте пару хвилин");
    break;

  case "сік":
    alert("Дякуємо за замовлення, ваш сік зараз принесуть");
    break;

  default:
    alert("Виберіть один із запропонованих напоїв: Кава, Чай, Сік");
}

const dayWeek = prompt("Введіть день тижня").toLowerCase();

switch (dayWeek) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    alert("Цей день є робочим днем");
    break;

  case "субота":
  case "неділя":
    alert("Цей день є вихідним днем");
    break;

  default:
    alert("Введено некоректний день тижня");
}

const month = Number(prompt("Введіть число місяця"));
switch (month) {
  case 1:
    alert("Зима, Січень");
    break;

  case 2:
    alert("Зима, Лютий");
    break;

  case 3:
    alert("Весна, Березень");
    break;

  case 4:
    alert("Весна, Квітень");
    break;

  case 5:
    alert("Весна, Травень");
    break;

  case 6:
    alert("Літо, Червень");
    break;

  case 7:
    alert("Літо, Липень");
    break;

  case 8:
    alert("Літо, Серпень");
    break;

  case 9:
    alert("Осінь, Вересень");
    break;

  case 10:
    alert("Осінь, Жовтень");
    break;

  case 11:
    alert("Осінь, Листопад");
    break;

  case 12:
    alert("Зима, Грудень");
    break;

  default:
    alert("Такого місяця не існує");
}

const dayMonth = prompt("Введіть назву місяця").toLowerCase();

switch (dayMonth) {
  case "вересень":
    alert("У цьому місяці 30 днів");
    break;

  case "жовтень":
    alert("У цьому місяці 31 день");
    break;

  case "листопад":
    alert("У цьому місяці 30 днів");
    break;

  case "грудень":
    alert("У цьому місяці 31 день");
    break;

  case "січень":
    alert("У цьому місяці 31 день");
    break;

  case "лютий":
    alert("У цьому місяці 29 днів");
    break;

  case "березень":
    alert("У цьому місяці 31 день");
    break;

  case "квітень":
    alert("У цьому місяці 30 днів");
    break;

  case "травень":
    alert("У цьому місяці 31 день");
    break;

  case "червень":
    alert("У цьому місяці 30 днів");
    break;

  case "липень":
    alert("У цьому місяці 31 день");
    break;

  case "серпень":
    alert("У цьому місяці 31 день");
    break;

  default:
    alert("Такого місяця не існує");
}

const color = prompt("Введіть назву кольору світлофора").toLowerCase();

switch (color) {
  case "червоний":
    alert("Рух заборонено!");
    break;

  case "жовтий":
    alert("Приготуйтесь");
    break;

  case "зелений":
    alert("Рух дозволено");
    break;

  default:
    alert("Error");
}

const firstNumber = parseFloat(prompt("Введіть перше число"));
const secondNumber = parseFloat(prompt("Введіть друге число"));
const operation = prompt("Виберіть знак: + - * / ");
switch (operation) {
  case "+":
    alert(firstNumber + secondNumber);
    break;

  case "-":
    alert(firstNumber - secondNumber);
    break;

  case "*":
    alert(firstNumber * secondNumber);
    break;

  case "/":
    alert("Ділити на нуль неможливо");
    alert(firstNumber / secondNumber);
    break;

  default:
    alert("Операцію не виконано");
}
