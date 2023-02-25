//your code here
//your code here
const person = document.getElementById("person");
const btn = document.getElementById("getUser");

var user;

btn.addEventListener("click", getAnotherUser);

async function fetchData() {
  const url = "https://randomuser.me/api/";
  const res = await fetch(url, {
    method: "get",
  });
  const data = await res.json();
  return data;
}
async function renderData() {
  const data = await fetchData();
  const personData = data.results[0];
  console.log(personData);
  const full_name = personData.name.first + " " + personData.name.last;
  const imgSrc = personData.picture.large;

  user = {age:personData.dob.age,email:personData.email,phone:personData.phone}

  person.innerHTML = `
    <img src=${imgSrc} />
    <h2>${full_name}</h2>
  `;
}
function getAnotherUser() {
  document.getElementById("userData").innerHTML = "";
  renderData();
}

function showAge() {
  document.getElementById("userData").innerHTML = user.age;
}
function showEmail(){
  document.getElementById("userData").innerHTML = user.email;
}
function showPhone(){
  document.getElementById("userData").innerHTML = user.phone;
}

renderData();