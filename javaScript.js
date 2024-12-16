const correctAnswer = ["B", "A", "A", "B"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });

  // showing results
  const result = document.querySelector(".result");
  result.classList.remove("d-none");
  scrollTo(0, 30);
  let output = 0;
  const resultAnimation = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(resultAnimation);
    } else {
      output++;
    }
  }, 100);
});

// setInterval
/*
let i = 0;
const timer = setInterval(() => {
  i++;
  console.log(`Hi ${i}`);
  if (i === 3) {
    clearInterval(timer);
  }
}, 2000); // 2s
*/
