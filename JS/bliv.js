const days = document.querySelectorAll(".day");
const times = document.getElementById("times");
const bookBtn = document.getElementById("bookBtn");

days.forEach((day) => {
  day.addEventListener("click", () => {
    days.forEach((d) => d.classList.remove("selected"));
    day.classList.add("selected");

    // Vis tider og knap
    times.classList.add("visible");
    bookBtn.classList.add("visible");
  });
});
