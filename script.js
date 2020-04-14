const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.getElementById('movie')
const ticketPrice = movieSelect.value;


console.log(ticketPrice);

container.addEventListener("click", (e) => {
  seats.forEach((seat) => {
    console.log(seat);
  });
});