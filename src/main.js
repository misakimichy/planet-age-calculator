import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User, countries, planets } from './backend';

// Create country HTML option elements using countries enum
const createCountryOptions = () => {
  Object.values(countries).map(country => {
    $("select#country").append(`<option value="${country}">${country}</option>`);
  });
};

// Create planet HTML option elements using planets enum
const createPlanetOptions = () => {
  Object.keys(planets).map(planet => {
    $("select#planet").append(`<option value="${planet}">${planet}</option>`);
  });
};

// Show the selected planet image
const showPlanetImage = inputPlanet => {
  let planetImage;
  Object.keys(planets).find(key => {
    if(planets[key].includes(inputPlanet.toLowerCase()) === true) {
      planetImage = planets[key];
    }
    return;
  });
  return planetImage;
};

// Frontend logic
$(document).ready(function(){
  createCountryOptions();
  createPlanetOptions();
  $("form").submit(function(event){
    event.preventDefault();
    const inputAge = parseInt($("input#age").val());
    const inputCountry = $("select#country").val();
    const inputPlanet = $("select#planet").val();

    const user = new User(inputAge, inputCountry, inputPlanet);

    // Call backend logic and catch error here.
    try {
      // Save the return object and render them.
      const result = user.calculateAges();
      $(".age").text(result.planetAge);
      $(".years-left").text(result.yearsToLive);
      $(".result").prepend(`<img src="${showPlanetImage(inputPlanet)}" alt="Image of ${inputPlanet}">`);
      $(".planet").text(inputPlanet);
      $(".result").show();
    } catch (error) {
      alert(error.message);
    }
  });
});