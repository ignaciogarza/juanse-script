const extraer = document.getElementById("iniciarExtraccion");
const file = document.querySelector("input[type='file']");
const menuCountries = document.getElementById("itemCountries");

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

function createPerson(persons) {
  let countries = [];
  console.log(persons);
  for (person in persons) {
    countries.push(createCountries(persons[person][1]));
  }
}
