const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');

// Load existing choices from localStorage or start fresh
let userChoices = JSON.parse(localStorage.getItem('userChoices')) || [];

function saveChoices() {
  localStorage.setItem('userChoices', JSON.stringify(userChoices));
}

function handleAnswer(answer) {
  console.log("User answered Q1:", answer);
  userChoices.push({ question: "Q1: Did You Forgive Me ?", answer: answer });
  saveChoices(); // Save to localStorage

  if (questionText.textContent.includes("Did You Forgive Me")) {
    if (answer === 'yes') {
      questionText.textContent = "Q2: Really";
      answersDiv.innerHTML = `
        <button onclick="finalAnswer('really_yes')">Yes</button>
        <button onclick="finalAnswer('really_no')">No</button>
      `;
    } else if (answer === 'no') {
      questionText.textContent = "Q2: Please??";
      answersDiv.innerHTML = `
        <button onclick="finalAnswer('please_okay')">Okay</button>
        <button onclick="finalAnswer('please_no')">No</button>
      `;
    }
  }
}

function finalAnswer(response) {
  let finalMessage = "";
  let question = questionText.textContent;

  console.log("User answered Q2:", response);
  userChoices.push({ question: question, answer: response });
  saveChoices(); // Save to localStorage

  switch (response) {
    case 'really_yes':
      finalMessage = "GO AND DM ME THEN !! (❁´◡`❁)";
      break;
    case 'please_okay':
      finalMessage = "ThankYou !!";
      break;
    case 'please_no':
    case 'really_no':
      finalMessage = "No Worries 😔";
      break;
  }

  questionText.textContent = finalMessage;
  answersDiv.innerHTML = "";

  console.log("All user choices:", userChoices);
}
