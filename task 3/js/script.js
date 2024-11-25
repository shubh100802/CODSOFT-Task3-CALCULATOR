let resultField = document.getElementById("result");

// Append the value to the display
function appendValue(value) {
  resultField.value += value;
}

// Clear the display
function clearDisplay() {
  resultField.value = "";
}

// Delete the last character
function deleteLast() {
  resultField.value = resultField.value.slice(0, -1);
}

// Calculate and display the result
function calculateResult() {
  try {
    resultField.value = eval(resultField.value); // Use eval with caution!
  } catch {
    resultField.value = "Error";
  }
}

// Calculate square root
function calculateSquareRoot() {
  try {
    resultField.value = Math.sqrt(eval(resultField.value));
  } catch {
    resultField.value = "Error";
  }
}

// Calculate square
function calculateSquare() {
  try {
    resultField.value = Math.pow(eval(resultField.value), 2);
  } catch {
    resultField.value = "Error";
  }
}

// Calculate reciprocal
function calculateReciprocal() {
  try {
    resultField.value = 1 / eval(resultField.value);
  } catch {
    resultField.value = "Error";
  }
}

// Calculate percentage
function calculatePercentage() {
  try {
    resultField.value = eval(resultField.value) / 100;
  } catch {
    resultField.value = "Error";
  }
}

// Listen for keyboard inputs
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    appendValue(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === ".") {
    appendValue(".");
  }
});
