const newYearDate = new Date('2024-01-01T23:59:59');

const timeLeftToNewYear = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = newYearDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  showTimeLeft.textContent = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds `;
}, 1000);

const divRef = document.querySelector('.container');
const showTimeLeft = document.createElement('h2');
showTimeLeft.style = 'color: red; text-shadow: 2px 2px 5px black';

divRef.appendChild(showTimeLeft);
