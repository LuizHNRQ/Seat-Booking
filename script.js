const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

populateUi();

//Sava selected movie index and price

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//Functions update count

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

//populate UI , get data from local storage

function populateUi() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
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

//Initial count and total ser
updateSlectedCount();
