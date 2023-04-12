//---------timer v.1

const divRef = document.querySelector('.container');

const textTimeLeft = document.createElement('h2');
textTimeLeft.style = 'color: white; text-shadow: 0px 0px 15px white';

const newYearDate = new Date('2024-01-01T23:59:59');

divRef.appendChild(textTimeLeft);

const timeLeftToNewYear = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = newYearDate - now;

  const days = pad(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((timeLeft % (1000 * 60)) / 1000));

  textTimeLeft.textContent = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds `;
}, 1000);

function pad(value) {
  return String(value).padStart(2, '0');
}

//---------timer v.2

// const divRef = document.querySelector('.container');
// const textTimeLeft = document.createElement('h2');
// textTimeLeft.style = 'color: white; text-shadow: 0px 0px 15px white';

// const timeToNewYear = {
//   start() {
//     const newYearDate = new Date('2024-01-01T23:59:59');

//     setInterval(() => {
//       const currentTime = Date.now();
//       const timeLeft = newYearDate - currentTime;

//       showTimeLeft(timeLeft);
//     }, 1000);
//   },
// };

// function showTimeLeft(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

//   textTimeLeft.textContent = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds `;
// }

// timeToNewYear.start();

// divRef.appendChild(textTimeLeft);

// function pad(value) {
//   return String(value).padStart(2, '0');
// }
