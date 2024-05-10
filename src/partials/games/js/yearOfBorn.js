let yearOfBornAnswerText = document.querySelector('.YearOfBornAnswerText');
let yearOfBornBtn = document.querySelector('.yearOfBornInputBtn');
let yearOfBornInp = document.querySelector('.yearOfBornInput');

function yearCheck(year) {
  if (Number.isInteger(year) && year % 4 === 0) {
    yearOfBornAnswerText.textContent = "Ви народилися в високосний рік!";
  } else {
    yearOfBornAnswerText.textContent = "Ви не народилися в високосний рік =( 🥲";
  }
}

yearOfBornBtn.addEventListener('click', function() {
  const year = parseInt(yearOfBornInp.value);
  yearCheck(year);
});