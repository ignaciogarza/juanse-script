const extraer = document.getElementById("iniciarExtraccion");
const file = document.querySelector("input[type='file']");
const menuCountries = document.getElementById("itemCountries");
const frameContent = document.getElementById("contentEvent");

// flags
const flagAntigua =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Antigua-y-Barbuda.png";
const flagArgentina =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Argentina.png";
const flagBarbados =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Barbados.png";
const flagBelize =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Belize.png";
const flagBolivia =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Bolivia.png";
const flagBrasil =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Brasil.png";
const flagCanada =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Canada.png";
const flagChile =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Chile.png";
const flagColombia =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Colombia.png";
const flagCostaRica =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Costa-Rica.png";

let listCountries = [];

extraer.addEventListener("click", function (e) {
  const reader = new FileReader();
  reader.onload = function () {
    const lines = reader.result.split("\n").map(function (line) {
      return line.split(",");
    });

    getInformationFromLines(lines);
  };
  reader.readAsText(file.files[0]);
});

function getInformationFromLines(lines) {
  // crate array of countries from countries in file
  for (line in lines) {
    if (lines[line][0] === "ACE Edition" || lines[line][0] === "") {
      console.log("Saltarte el titulo / vacio");
    } else {
      crateCountryList(lines[line][1]);
    }
  }
  //Draw HTML menu of countries
  drawMenuCountries(listCountries);

  // Draw content about events
  createCountryWithPersonProfile(lines);
}

// create contries list

function crateCountryList(country) {
  if (!listCountries.includes(country)) {
    if (country !== null) {
      listCountries.push(country);
    }
  }
}

// Draw HTML Menu structure for menu countries

function drawMenuCountries(countries) {
  console.log(countries);
  for (countrie in countries) {
    menuCountries.innerHTML += `<li><a href="#${countries[countrie]}">${countries[countrie]}</a></li>`;
  }
}

// draw person profile by country

function createCountryWithPersonProfile(persons) {
  for (person in persons) {
    if (persons[person][1] === "Argentina") {
      frameContent.innerHTML = "<h1>list</h1>";
    }
  }
}
