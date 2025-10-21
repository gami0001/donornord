console.log("loaded YAY");

const url = "https://dummyjson.com/users/filter?key=gender&value=male&limit=300";
const users_container = document.querySelector(".users_container");
let allData;

document.querySelectorAll(".donor_filter button").forEach((btn) => {
  btn.addEventListener("click", filterKlik);
});

function filterKlik(evt) {
  showFiltered(evt.currentTarget.dataset.eyecolor);
}

function showFiltered(filter) {
  if (filter == "All") {
    showUsers(allData);
  } else {
    const filteredUsersArr = allData.filter((user) => user.eyeColor === filter);
    showUsers(filteredUsersArr);
  }
  console.log("Filter valgt:", filter);
}

function getData(url) {
  console.log("Henter data...");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Data modtaget:", data);
      allData = data.users;
      showUsers(allData);
    })
    .catch((err) => console.error("Fejl:", err));
}

function showUsers(users) {
  const existingList = document.querySelector(".users_list");
  if (existingList) {
    existingList.remove();
  }

  const usersList = document.createElement("div");
  usersList.classList.add("users_list");

  users.forEach((user) => {
    const isTall = user.height > 182;
    const heightText = `${user.height} cm`;

    const card = document.createElement("div");
    card.classList.add("user_card");

    card.innerHTML = `
      <div class="card_top">
        <div class="imageContainer">
          <img src="IMG/silhuet.svg" alt="silhuet" class="silhouette">
          ${isTall ? '<p class="tall_genetics_text">tall genetics</p>' : ""}
        </div>
        <div class="info">
          <p class="label">Hårfarve: <span>${user.hair.color}</span></p>
          <p class="label">Øjenfarve: <span>${user.eyeColor}</span></p>
          <p class="label">Højde: <span>${user.height} cm</span></p>
        </div>
      </div>
      <div class="card_bottom">
        <p class="id">ID ${user.id}</p>
      </div>
    `;

    usersList.appendChild(card);
  });

  users_container.appendChild(usersList);
}

getData(url);
