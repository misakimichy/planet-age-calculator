import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Countries enum
export const countries = Object.freeze({
  USA: "the United States",
  China: "China",
  Japan: "Japan",
  Germany: "Germany",
  UK: "United Kingdom",
  India: "India",
  France: "France",
  Italy: "Italy",
  Brazil: "Brazil",
  Canada: "Canada",
});

// Backend logic
export class User {
  constructor(age, country) {
    this.age = age;
    this.country = country;
  }

  // Get country life expectancy: https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy
  calculateLifeExpectancy() {
    let userLifeExpectancy;
    switch(this.country) {
      case countries.USA :
        userLifeExpectancy = 79.3;
        break;
      case countries.China :
        userLifeExpectancy = 76.1;
        break;
      case countries.Japan :
        userLifeExpectancy = 83.7;
        break;
      case countries.Germany :
        userLifeExpectancy = 81.0;
        break;
      case countries.UK :
        userLifeExpectancy = 81.2;
        break;
      case countries.India :
        userLifeExpectancy = 68.3;
        break;
      case countries.France :
        userLifeExpectancy = 82.4;
        break;
      case countries.Italy :
        userLifeExpectancy = 82.7;
        break;
      case countries.Brazil :
        userLifeExpectancy = 75.0;
        break;
      case countries.Canada :
        userLifeExpectancy = 82.2;
        break;
      default :
        throw new Error("Please choose country from the list.");
    }
    return userLifeExpectancy;
  }
}

// Planet class
export class Planet {
  constructor(name) {
    this.name = name;
  }

  // Calculate to planet years
  calculateToPlanetAge(user) {
    let planetYears;
    switch(this.name) {
      case "Mercury" :
        planetYears = 0.24;
        break;
      case "Venus" :
        planetYears = 0.62;
        break;
      case "Mars" :
        planetYears = 1.88;
        break;
      case "Jupiter" :
        planetYears = 11.86;
    }
    const planetAge = parseFloat((user.age / planetYears).toFixed(2));
    return planetAge;
  }

  // Calculate years to live in other planet
  calculateLeftToLive(user) {
    let planetYears;
    switch(this.name) {
      case "Mercury" :
        planetYears = 0.24;
        break;
      case "Venus" :
        planetYears = 0.62;
        break;
      case "Mars" :
        planetYears = 1.88;
        break;
      case "Jupiter" :
        planetYears = 11.86;
    }
    const userLifeExpectancy = user.calculateLifeExpectancy();
    const yearsToLive = parseFloat(((userLifeExpectancy - user.age) / planetYears).toFixed(2));
    return yearsToLive;
  }
}

// Frontend logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const inputAge = parseInt($("input#age").val());
    const inputCountry = $("select#country").val();
    const inputPlanet = $("select#planet").val();

    const user = new User(inputAge, inputCountry);
    const planet = new Planet(inputPlanet);

    try {
      $(".result").show();
      $(".planet").text(planet.name);
      $(".age").text(planet.calculateToPlanetAge(user));
      $(".years-left").text(planet.calculateLeftToLive(user));
    } catch (error) {
      alert(error.message);
    }
  });
});