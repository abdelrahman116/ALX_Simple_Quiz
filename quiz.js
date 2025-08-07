function checkAnswer() {
  const correctAnswer = "4";
  const checkedAnswer = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = checkedAnswer.value;
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }
}
const button = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);
