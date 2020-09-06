const extraer = document.getElementById("iniciarExtraccion");
const file = document.querySelector("input[type='file']");
const menuCountries = document.getElementById("itemCountries");
const countryTitle = document.getElementById("countryTitle");

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
const attende = [];

extraer.addEventListener("click", function (e) {
  const reader = new FileReader();
  reader.onload = function () {
    const lines = reader.result.split("\n").map(function (line) {
      return line;
    });

    getInformationFromLines(lines);
  };
  reader.readAsText(file.files[0]);
});

function getInformationFromLines(lines) {
  // crate array of countries from countries in file

  for (line in lines) {
    attende.push(lines[line].split(","));
  }

  for (person in attende) {
    if (attende[person][0] === "ACE Edition" || attende[person][0] === "") {
      console.log("Saltarte el titulo / vacio");
    } else {
      crateCountryList(attende[person][1]);
    }
  }
  //Draw HTML menu of countries
  drawMenuCountries(listCountries);

  // Draw content about events
  createCountryWithPersonProfile(listCountries, attende);
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
  for (countrie in countries) {
    menuCountries.innerHTML += `<li><a href="#${countries[countrie]}">${countries[countrie]}</a></li>`;
  }
}

// draw person profile by country

function createCountryWithPersonProfile(countries, persons) {
  for (country in countries) {
    let flag;

    if (countries[country] === "Argentina") {
      flag = flagArgentina;
    } else if (countries[country] === "Antigua & Barbuda") {
      flag = flagAntigua;
    } else if (countries[country] === "Barbados") {
      flag = flagBarbados;
    } else if (countries[country] === "Belize") {
      flag = flagBelize;
    } else if (countries[country] === "Bolivia") {
      flag = flagBolivia;
    } else if (countries[country] === "Brazil") {
      flag = flagBrasil;
    } else if (countries[country] === "Canada") {
      flag = flagCanada;
    } else if (countries[country] === "Chile") {
      flag = flagChile;
    } else if (countries[country] === "Colombia") {
      flag = flagColombia;
    } else if (countries[country] === "Costa Rica") {
      flag = flagCostaRica;
    }

    countryTitle.innerHTML += `
    <div class="infoPais" id="${countries[country]}" style=" vertical-align: top; padding-bottom: 16px; margin-bottom:40px;" id="contentEvent"><div class="banderaPais" style="display: inline-block"><img src="${flag}" alt="" style="width: 60px; height: 61px"/></div><div class="pais" style="display: inline-block; vertical-align: top; width:90%;" ><h2 style=" font-size: 40px; color: #406181; font-weight: 700; margin: 5px 0 0 20px; padding: 0;"  >${countries[country]}</h2></div></div>`;
  }

  let liPersonItem;

  for (person in persons) {
    if (persons[person][0] === "ACE Edition" || persons[person][0] === "") {
    } else {
      let name = persons[person][2].replace('"""', "");
      let currentTitle = persons[person][3].replace('"""', "");
      let participatedAs = persons[person][4].replace('"""', "");
      let edition = persons[person][0].replace('"""', "");
      edition = edition.replace('"""', "");

      liPersonItem = document.createElement("li");
      liPersonItem.style.cssText =
        "display:block; border-bottom:2px solid black; padding-bottom:20px; margin-bottom:20px;";
      liPersonItem.innerHTML = `
      <h3 style=" color: #cdcdcd; font-weight: 400; font-size: 26px; margin-bottom: 0;">Name</h3>
      <p style="font-size: 20px; color: #53969e; font-weight: 500; margin-top: 0; padding-top: 0;">${name}</p>
      <h3 style="color:#cdcdcd; font-weight: 400; font-size: 26px; margin-bottom: 0;">Current title</h3>
      <p style="font-size: 20px; color: #53969e;font-weight: 500; margin-top: 0; padding-top: 0;">${currentTitle}</p> 
      `;
      if (participatedAs) {
        liPersonItem.innerHTML += `<h3 style="color: #cdcdcd; font-weight: 400; font-size: 26px; margin-bottom: 0;">* Participated as</h3>
      <p style="font-size: 20px; color: #53969e; font-weight: 500; margin-top: 0; padding-top: 0;">${participatedAs}</p>`;
      }

      liPersonItem.innerHTML += `
      <h3 style="color: #cdcdcd; font-weight: 400; font-size: 26px; margin-bottom: 0;">ACE Edition</h3>
      <p style=" font-size: 20px; color: #53969e; font-weight: 500; margin-top: 0; padding-top: 0;">${edition}</p>
      <h3 style=" color: #cdcdcd; font-weight: 400; font-size: 26px; margin-bottom: 0;">Social Media</h3>
      <p style=" font-size: 20px; color: #53969e; font-weight: 500; margin-top: 0; padding-top: 0;"><i class="fab fa-twitter"></i><i class="fab fa-twitter"></i>xxxx</p>
      <a href="${persons[person][6]}" target="_blank" style="text-decoration: none; color: #cdcdcd">
      <h3 style="color: #cdcdcd; font-weight: 400; font-size: 26px; margin-bottom: 0;">
      <i aria-hidden="true" class="fas fa-link"></i> Website
      </h3></a>`;

      document
        .getElementById(`${persons[person][1]}`)
        .appendChild(liPersonItem);
    }
  }
}
