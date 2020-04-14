const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

//Sava selected movie index and price

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//Functions

function updateSlectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = `${selectedSeatsCount}`;
  total.innerText = `${selectedSeatsCount * ticketPrice}`;
}

//select movie event listner

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);

  updateSlectedCount();
});

//Event Listner

container.addEventListener("click", (e) => {
  const seat = e.target;

  if (!seat.classList.contains("occupied") && seat.classList.contains("seat")) {
    seat.classList.toggle("selected");
    updateSlectedCount();
  } else {
    console.log("oi");
  }
});
