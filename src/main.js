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
    return this.age;
  }

}

// Frontend logic
$(document).ready(function(){
  const h1 = new CurrentStatus(10, "Japan", false, false);
  return h1;
});