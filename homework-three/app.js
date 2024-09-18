function checkConsole() {
  var textInput = document.getElementById("textInput").value;
  var numberInput = document.getElementById("nInput").value;
  document.getElementById(
    "firstResults"
  ).innerText = `First Results: ${textInput} ${numberInput}`;
}

function addValues() {
  var textInput = parseFloat(document.getElementById("textInput").value);
  var numberInput = parseFloat(document.getElementById("nInput").value);

  if (isNaN(textInput) || isNaN(numberInput)) {
    document.getElementById("secondResults").innerText =
      "Please enter valid numbers!";
    return;
  }

  var sum = textInput + numberInput;
  document.getElementById(
    "secondResults"
  ).innerText = `parseFloat Results: ${sum}`;
}

function calculateInterest() {
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var time = parseFloat(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById("results").innerText =
      "Please enter valid numbers!";
    return;
  }

  var interest = principal * (1 + (rate / 100) * time);
  document.getElementById(
    "results"
  ).innerText = `With a beginning principal of $${principal} and a growth rate of ${rate}% for ${time} years, your total interest will be $${(
    interest - principal
  ).toFixed(2)} with a grand total of $${interest.toFixed(2)}.`;
}
