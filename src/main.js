import $ from 'jquery';

// Backend logic
export class User {
  constructor(age, country) {
    this.age = age;
    this.country = country;
  }

  // Get country life expectancy: https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy
  calculateLifeExpectancy() {
    switch(this.country) {
      case "Japan" :
        return 83.7;
    }
  }
}

// Planet class
export class Planet {
  constructor(name) {
    this.name = name;
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
// get life expectancy depends on where a user from. (select from drop down)
// cal the gap of current age and life expectancy then convert it.


// Convert earth age to each planet age. Return as numbers with second decimals.
// const mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
// const venusAge = parseFloat((this.age / 0.62).toFixed(2));
// const marsAge = parseFloat((this.age / 1.88).toFixed(2));
// const jupiterAge = parseFloat((this.age / 11.86).toFixed(2));

// return [mercuryAge, venusAge, marsAge, jupiterAge];

// Frontend logic
$(document).ready(function(){
  const user = new User(10, "Japan");
  const planet = new Planet("Mercury");
  return planet.calculateLeftToLive(user);
});