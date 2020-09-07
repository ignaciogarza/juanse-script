const extraer = document.getElementById("iniciarExtraccion");
const contenedorCodigo = document.getElementById("contenedorDirectorio");
const copyHTML = document.getElementById("copyHTML");
const textArea = document.getElementById("textArea");
const file = document.querySelector("input[type='file']");
const menuCountries = document.getElementById("itemCountries");
const countryTitle = document.getElementById("countryTitle");

const otherCountries = [
  "Development Bank of Latin América (CAF)",
  "Inter American Development Bank (IDB)",
  "Caribbean Developent Bank",
  "Caribbean Developent Bank ",
  "European Commission",
  "European Parliament",
  "Organisation of Eastern Caribbean States (OECS)",
  "Pan American Development Fundation",
  "Pan American Development Fundation ",
  "UN-HABITAT",
  "Walmart",
];

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
const flagJamaica =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Jamaica.png";
const flagMexico =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Mexico.png";
const flagNicaragua =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Nicaragua.png";
const flagPanama =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Panama.png";
const flagParaguay =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Paraguay.png";
const flagPeru =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Peru.png";
const flagElSalvador =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/El-Salvador.png";
const flagEcuador =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Ecuador.png";
const flagDominica =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Dominica.png";
const flagHonduras =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Honduras.png  ";
const flagGranada =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Grenada.png";
const flagDomRepublic =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Republica-Dominicana.png";
const flagGuatemala =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Guatemala.png";
const flagGuayana =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Guyana.png";
const flagHaiti =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Haiti.png";
const flagSaintKits =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Saint-Kitts-y-Nevis.png";
const flagSaintLucia =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Santa-Lucia.png";
const flagSaintVincent =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/San-Vicente-y-las-Granadinas.png";
const flagSuriname =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Suriname.png";
const flagTrinidad =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Trinidad-y-Tobago.png";
const flagUruguay =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Uruguay.png";
const flagBahamas =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Bahamas.png";
const flagUSA =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Estados-Unidos.png";
const flagVenezuela =
  "http://riacevents.org/ACE/wp-content/uploads/2020/09/Venezuela.png";

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
      if (otherCountries.includes(country)) {
        let otherCountry = "Other";
        if (!listCountries.includes("Other")) {
          listCountries.push(otherCountry);
        }
      } else {
        listCountries.push(country);
      }
    }
  }
}

// Draw HTML Menu structure for menu countries

function drawMenuCountries(countries) {
  for (countrie in countries) {
    if (countries[countrie] !== "" || countries[countrie] == null) {
      menuCountries.innerHTML += `<li style="padding:5px; display:inline-block; width:200px;"><a href="#${countries[countrie]}" style="color:#123347; text-decoration:none; font-size:20px;"><i class="fa fa-chevron-right"></i>${countries[countrie]}</a></li>`;
    }
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
    } else if (countries[country] === "Honduras") {
      flag = flagCostaRica;
    } else if (countries[country] === "El Salvador") {
      flag = flagElSalvador;
    } else if (countries[country] === "Ecuador") {
      flag = flagEcuador;
    } else if (countries[country] === "Dominica") {
      flag = flagDominica;
    } else if (countries[country] === "Mexico") {
      flag = flagMexico;
    } else if (countries[country] == "") {
      continue;
    } else if (countries[country] === "Grenada") {
      flag = flagGranada;
    } else if (countries[country] === "Dominican Republic") {
      flag = flagDomRepublic;
    } else if (countries[country] === "Guatemala") {
      flag = flagGuatemala;
    } else if (countries[country] === "Haiti") {
      flag = flagHaiti;
    } else if (countries[country] === "Jamaica") {
      flag = flagJamaica;
    } else if (countries[country] === "Nicaragua") {
      flag = flagNicaragua;
    } else if (countries[country] === "Panama") {
      flag = flagPanama;
    } else if (countries[country] === "Paraguay") {
      flag = flagParaguay;
    } else if (countries[country] === "Guyana") {
      flag = flagGuayana;
    } else if (countries[country] === "Peru") {
      flag = flagPeru;
    } else if (countries[country] === "St. Lucia") {
      flag = flagSaintLucia;
    } else if (countries[country] === "Suriname") {
      flag = flagSuriname;
    } else if (countries[country] === "The Bahamas") {
      flag = flagBahamas;
    } else if (countries[country] === "Trinidad and Tobago") {
      flag = flagTrinidad;
    } else if (countries[country] === "United States of America") {
      flag = flagUSA;
    } else if (countries[country] === "Uruguay") {
      flag = flagUruguay;
    } else if (countries[country] === "Venezuela") {
      flag = flagVenezuela;
    }

    countryTitle.innerHTML += `
    <div class="infoPais" id="${countries[country]}" style=" vertical-align: top; padding-bottom: 16px; margin-bottom:40px;" id="contentEvent"><div class="banderaPais" style="display: inline-block"><img src="${flag}" alt="" style="width: 60px; height: 61px"/></div><div class="pais" style="display: inline-block; vertical-align: top; width:75%;" ><h2 style=" font-size: 40px; color: #406181; font-weight: 700; margin: 5px 0 20px 20px; padding: 0;"  >${countries[country]}</h2></div></div>`;
  }

  let liPersonItem;

  for (person in persons) {
    if (persons[person][0] === "ACE Edition" || persons[person][0] === "") {
    } else {
      let name = persons[person][2];
      let currentTitle = persons[person][3];
      let participatedAs = persons[person][4];
      let website = persons[person][5];
      let edition = persons[person][0];

      liPersonItem = document.createElement("li");
      liPersonItem.style.cssText =
        "display:block; border-bottom:2px solid black; padding-bottom:20px; margin-bottom:20px;";
      liPersonItem.innerHTML = `
      <h3 style=" color: #cdcdcd; font-weight: 400; font-size: 16px; margin-bottom: 0;">Name</h3>
      <p style="font-size: 20px; color: #53969e; font-weight: 500; margin-top: 0; padding-top: 0;">${name}</p>
      <h3 style="color:#cdcdcd; font-weight: 400; font-size: 16px; margin-bottom: 0;">Current title</h3>
      <p style="font-size: 20px; color: #53969e;font-weight: 500; margin-top: 0; padding-top: 0;">${currentTitle}</p>
      `;
      if (participatedAs) {
        liPersonItem.innerHTML += `<h3 style="color: #cdcdcd; font-weight: 400; font-size: 16px; margin-bottom: 0;">* Participated as</h3>
      <p style="font-size: 20px; font-style:italic; color: #53969e; font-weight: 500; margin-top: 0; padding-top: 0;">${participatedAs}</p>`;
      }

      liPersonItem.innerHTML += `
      <h3 style="color: #cdcdcd; font-weight: 400; font-size: 16px; margin-bottom: 0;">ACE Edition</h3>
      <p style=" font-size: 20px; color: #53969e; font-weight: 500; margin-top: 0; padding-top: 0;">${edition}</p>
      <a href="${website}" target="_blank" style="text-decoration: none; color: #cdcdcd">
      <h3 style="color: #cdcdcd; font-weight: 400; font-size: 16px; margin-bottom: 0;">
      <i aria-hidden="true" class="fa fa-link"></i> Website
      </h3></a>`;

      if (otherCountries.includes(persons[person][1])) {
        console.log("otro pais:" + country);
        let otherCountry = "Other";
        document.getElementById(`Other`).appendChild(liPersonItem);
      } else {
        document
          .getElementById(`${persons[person][1]}`)
          .appendChild(liPersonItem);
      }
    }
  }
}

copyHTML.addEventListener("click", function () {
  let codeToCopy = contenedorCodigo.innerHTML;
  textArea.innerText = codeToCopy;
  textArea.select();
  document.execCommand("Copy");
});
