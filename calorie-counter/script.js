const form = document.getElementById('calorie-form');
const logList = document.getElementById('log');
const totalSpan = document.getElementById('total');
let totalCalories = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const food = document.getElementById('food').value;
  const calories = parseInt(document.getElementById('calories').value, 10);

  if (food && !isNaN(calories)) {
    const li = document.createElement('li');
    li.textContent = `${food} - ${calories} cal`;
    logList.appendChild(li);

    totalCalories += calories;
    totalSpan.textContent = totalCalories;
    form.reset();
  }
});