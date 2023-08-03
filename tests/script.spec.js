const { CountryGuesser } = require("../src/index");

const countryGuesser = new CountryGuesser();

function check(name) {

  countryGuesser.guessCountryOf(name)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Erreur lors de la requête HTTP:', error);
    });

}

check('TOSSOU');
