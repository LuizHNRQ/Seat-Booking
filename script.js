const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

container.addEventListener('click', e => {
  seats.forEach(seat => {
    console.log(seat);
  })
});