const extraer = document.getElementById("iniciarExtraccion");
const file = document.querySelector("input[type='file']");
let listCountries = [];

extraer.addEventListener("click", function (e) {
  const reader = new FileReader();
  reader.onload = function () {
    const lines = reader.result.split("\n").map(function (line) {
      return line.split(",");
    });
    createPerson(lines);
  };

  console.log(listCountries);

  reader.readAsText(file.files[0]);
});

function createPerson(persons) {
  console.log(persons);
  for (person in persons) {
    createCountries(persons[person][1]);
  }

  //   createCountries(person);
}

function createCountries(country) {
  console.log("hola pais");
  console.log(country);
}
