const days = document.querySelectorAll(".day");
const times = document.getElementById("times");

days.forEach((day) => {
  day.addEventListener("click", () => {
    days.forEach((d) => d.classList.remove("selected"));
    day.classList.add("selected");

    // Tilføj "visible"-klassen i stedet for at ændre display direkte
    times.classList.add("visible");
  });
});
