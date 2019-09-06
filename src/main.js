import $ from 'jquery';

// Backend logic
export class CurrentStatus {
  constructor(age, country, doesSmoke, doesDrink) {
    this.age = age;
    this.country = country;
    this.doesSmoke = doesSmoke;
    this.doesDrink = doesDrink;
  }

  returnAge () {
    const mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
    const venusAge = parseFloat((this.age / 0.62).toFixed(2));
    const marsAge = parseFloat((this.age / 1.88).toFixed(2));
    const jupiterAge = parseFloat((this.age / 11.86).toFixed(2));

    return [mercuryAge, venusAge, marsAge, jupiterAge];
  }

}

// Frontend logic
$(document).ready(function(){
  const h1 = new CurrentStatus(10, "Japan", false, false);
  return h1.returnAge()[1];
});