const button = document.querySelector(".submit-button");

button.addEventListener("click", () => {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  // validation
  if (!height || !weight) {
    alert("Please enter valid height and weight");
    return;
  }

  // BMI formula (height in meters)
  const bmi = (weight / (height / 100) ** 2).toFixed(2);

  // show result block
  const result = document.getElementById("result");
  result.style.display = "block";

  document.getElementById("bmiValue").innerText = bmi;

  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obesity";
  }

  document.getElementById("bmiStatus").innerText = status;

  heightInput.value = "";
  weightInput.value = "";
});
