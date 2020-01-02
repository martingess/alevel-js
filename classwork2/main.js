const btn = document.getElementById('open');
const menu = document.getElementById('menu');
btn.onclick = (event) => {
  event.stopPropagation()
  menu.classList.toggle('active');
};

menu.onclick = (event) => {
  event.stopPropagation();
};

document.body.onclick = () => menu.classList.remove('active');

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');

// first.addEventListener('click', (event) => {
//   console.log('first', event.eventPhase);
// });
// second.addEventListener('click', (event) => {
//   console.log('second', event.eventPhase);
// });
// third.addEventListener('click', (event) => {
//   event.stopPropagation();
//   console.log('third', event.eventPhase);
// }, true);

// first.onclick = (event) => {
//     console.log('first click', event.eventPhase)
// }

// second.onclick = (event) => {
//     console.log('second click', event.eventPhase)
// }

// third.onclick = (event) => {
//     console.log('third click', event.eventPhase)
// }

const hey = '123';
