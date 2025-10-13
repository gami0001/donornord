console.log("loaded YAY");

const url = "https://dummyjson.com/users";
const users_container = document.querySelector(".users_container");

function getData(url) {
  console.log("Henter data...");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Data modtaget:", data);
      showUsers(data.users);
    })
    .catch((err) => console.error("Fejl:", err));
}

function showUsers(users) {
  const usersList = document.createElement("div");
  usersList.classList.add("users_list");

  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user_card");

    card.innerHTML = `
      <div class="card_top">
        <img src="IMG/silhuet.svg" alt="silhuet" class="silhouette">
        <div class="info">
          <p class="label">Hårfarve: <span>${user.hair.color}</span></p>
          <p class="label">Øjenfarve: <span>${user.eyeColor}</span></p>
          <p class="label">Højde: <span>${user.height} cm</span></p>
        </div>
      </div>
      <div class="card_bottom">
        <p class="id">ID ${user.id}</p>
        <p class="age">(${user.age} år)</p>
      </div>
    `;

    usersList.appendChild(card);
  });

  users_container.appendChild(usersList);
}

getData(url);
