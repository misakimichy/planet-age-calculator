import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User, countries, planets } from './backend';

// Force loading all images into webpack
const importAll = r => r.keys().map(r);
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

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

// Clear form function
const clearForm = () => {
  $("input#age").val('');
  $("select#country").prop('selectedIndex', 0);
  $("select#planet").prop('selectedIndex', 0);
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
      $(".planet").text(inputPlanet);
      $(".result").append((user.age > user.calculateLifeExpectancy())
        ?(`<p>You have passed the average of life expectancy and you lived past <span class="years-left">${result.yearsToLive}</span> years.</p>`)
        :(`<p>Your life expectancy in <span class="planet">${user.planet}</span> is <span class="years-left">${result.yearsToLive}</span> years.</p>`)
      );
      $(".result").prepend(`<img src="${planets[inputPlanet]}" alt="Image of ${user.planet}">`);
      $(".result").show();
      clearForm();
    } catch (error) {
      alert(error.message);
    }
  });
});