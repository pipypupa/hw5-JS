// Показати повідомлення про вибір напою Завдання 1
function showDrinkMessage() {
  const drink = document.getElementById("drinkSelect").value;
  const message = drink ? `Ви обрали ${drink}.` : "";
  document.getElementById("drinkMessage").textContent = message;
}

// Перевірка на робочий або вихідний день Завданння 2
function checkDay() {
  const day = document.getElementById("dayInput").value.toLowerCase();
  const workingDays = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
  const weekendDays = ["субота", "неділя"];
  let result;

  if (workingDays.includes(day)) {
    result = "Це робочий день.";
  } else if (weekendDays.includes(day)) {
    result = "Це вихідний день.";
  } else {
    result = "Введіть коректний день тижня.";
  }

  document.getElementById("dayCheckResult").textContent = result;
}

// Перевірка пори року за номером місяця Завдання 3
function checkSeason() {
  const month = parseInt(document.getElementById("monthInput").value);
  let season;

  if (month >= 3 && month <= 5) {
    season = "Весна";
  } else if (month >= 6 && month <= 8) {
    season = "Літо";
  } else if (month >= 9 && month <= 11) {
    season = "Осінь";
  } else if (month === 12 || month === 1 || month === 2) {
    season = "Зима";
  } else {
    season = "Введіть коректний номер місяця.";
  }

  document.getElementById("seasonCheckResult").textContent = season;
}

// Перевірка кількості днів у місяці Завдання 4
function checkDaysInMonth() {
  const month = parseInt(document.getElementById("daysInMonthInput").value);
  let days;

  if (month === 2) {
    days = "28 або 29 днів";
  } else if ([4, 6, 9, 11].includes(month)) {
    days = "30 днів";
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    days = "31 день";
  } else {
    days = "Введіть коректний номер місяця.";
  }

  document.getElementById("daysInMonthResult").textContent = days;
}

// Дія за кольором Завдання 5
function checkColorAction() {
  const color = document.getElementById("colorInput").value.toLowerCase();
  let action;

  if (color === "червоний") {
    action = "Стоп";
  } else if (color === "зелений") {
    action = "Йти";
  } else if (color === "жовтий") {
    action = "Чекати";
  } else {
    action = "Невідомий колір";
  }

  document.getElementById("colorActionResult").textContent = action;
}

// Калькулятор з вибором операції Завдання 6
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Будь ласка, введіть обидва числа.";
  } else {
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Помилка: ділення на нуль!";
        break;
      default:
        result = "Невідома операція";
    }
  }

  document.getElementById("calcResult").textContent = `Результат: ${result}`;
}
