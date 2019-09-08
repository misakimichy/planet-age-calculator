import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User, Planet, countries, planets } from './app';

// Create country HTML option elements using countries enums
const createCountryOptions = () => {
  Object.values(countries).map(country => {
    $("select#country").append(`<option value="${country}">${country}</option>`);
  });
};

// Create planet HTML option elements using planets enums
const createPlanetOptions = () => {
  Object.values(planets).map(planet => {
    $("select#planet").append(`<option value="${planet}">${planet}</option>`);
  });
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

    const user = new User(inputAge, inputCountry);
    const planet = new Planet(inputPlanet);

    // Call backend logic and catch error here.
    try {
      $(".result").show();
      $(".planet").text(planet.name);
      
      // Save the return object and render them.
      const result = planet.calculateAges(user);
      $(".age").text(result.planetAge);
      $(".years-left").text(result.yearsToLive);
    } catch (error) {
      alert(error.message);
    }
  });
});