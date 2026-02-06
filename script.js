function calculate() {
  // Get values from input fields
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);

  // Calculate simple interest
  const interest = (principal * rate * time) / 100;

  // Display result
  document.getElementById("result").innerText =
    "Interest: " + interest;
}
;
