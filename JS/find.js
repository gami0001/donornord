console.log("loaded YAY");

const users = new URLSearchParams(window.location.search).get("users");
const url = `https://dummyjson.com/users?gender=male`;

const users_container = document.querySelector(".users_container");
let allData = [];

function getData(url) {
  console.log("Henter data...");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      showUsers(data);
    });
}
getData(url);
