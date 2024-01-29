document.addEventListener('DOMContentLoaded', function() {
  updateCircles();
});

function updateCircles() {
  const circles = document.querySelectorAll('.percentage');

  circles.forEach(circle => {
    const percentageInput = circle.querySelector('.percentage__value');
    const circleElement = circle.querySelector('.percentage__circle');
    const percentage = parseFloat(percentageInput.textContent);

    const angle = (percentage / 100) * 360;
    circleElement.style.setProperty('--percentage', `${angle}deg`);
  });
}
