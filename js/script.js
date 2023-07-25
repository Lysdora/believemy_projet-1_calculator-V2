function add(...numbers) {
  let resultat = 0;
  numbers.forEach((number) => {
    resultat += number;
  });
  return `The result of your addition is ${resultat} ⭐ 
  Bye bye 😊`;
}

function multiply(...numbers) {
  let resultat = 1;
  numbers.forEach((number) => {
    resultat *= number;
  });
  return `The result of your multiplication is ${resultat} ⭐ 
  Bye bye 😊`;
}

function subtract(...numbers) {
  let resultat = numbers[0];
  numbers.slice(1).forEach((number) => {
    resultat -= number;
  });
  return `The result of your subtraction is ${resultat} ⭐ 
  Bye bye 😊`;
}

function divide(...numbers) {
  let resultat = numbers[0];
  numbers.slice(1).forEach((number) => {
    resultat /= number;
  });
  return `The result of your division is ${resultat}  ⭐ 
  Bye bye 😊`;
}

const additionButton = document.querySelector(".addition");
const multiplyButton = document.querySelector(".multiply");
const subtractionButton = document.querySelector(".subtraction");
const divisionButton = document.querySelector(".division");

//
additionButton.addEventListener("click", () => {
  const question = prompt("Enter the numbers separated by commas 🥷");
  const numbers = question.split(",").map(Number);

  if (Number.isNaN(numbers[0]) || question === "") {
    alert("Please enter numbers 🛑");
  } else {
    const resultat = add(...numbers);
    alert(resultat);
  }
});

multiplyButton.addEventListener("click", () => {
  const question = prompt("Enter the numbers separated by commas 🥷");
  const numbers = question.split(",").map(Number);
  if (Number.isNaN(numbers[0]) || question === "") {
    alert("Please enter numbers 🛑");
  } else {
    const resultat = multiply(...numbers);
    alert(resultat);
  }
});

subtractionButton.addEventListener("click", () => {
  const question = prompt("Enter the numbers separated by commas 🥷");
  const numbers = question.split(",").map(Number);
  if (Number.isNaN(numbers[0]) || question === "") {
    alert("Please enter numbers 🛑");
  } else {
    const resultat = subtract(...numbers);
    alert(resultat);
  }
});

divisionButton.addEventListener("click", () => {
  const question = prompt("Enter the numbers separated by commas 🥷");
  const numbers = question.split(",").map(Number);
  if (Number.isNaN(numbers[0]) || question === "") {
    alert("Please enter numbers 🛑");
  } else {
    const resultat = divide(...numbers);
    alert(resultat);
  }
});
