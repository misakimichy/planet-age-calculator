// Backend logic
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

// Planets enum
export const planets = Object.freeze({
  Mercury: "img/mercury.jpg",
  Venus: "img/venus.jpg",
  Mars: "img/mars.jpg",
  Jupiter: "img/jupiter.jpg"
});

// User class
export class User {
  constructor(age, country, planet) {
    this.age = age;
    this.country = country;
    this.planet = planet;
  }

  // Get country life expectancy from https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy
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

  // Calculate years to live in other planet
  calculateAges() {
    // Return the keys of planets object
    const planetName = Object.keys(planets).map(planet => {
      return planet;
    });
    let planetYears;
    switch(this.planet) {
      case planetName[0] :
        planetYears = 0.24;
        break;
      case planetName[1] :
        planetYears = 0.62;
        break;
      case planetName[2] :
        planetYears = 1.88;
        break;
      case planetName[3] :
        planetYears = 11.86;
    }
    const userLifeExpectancy = this.calculateLifeExpectancy();
    const planetAge = parseFloat((this.age / planetYears).toFixed(2));
    const yearsToLive = (this.age > userLifeExpectancy)
      ? parseFloat(((this.age - userLifeExpectancy) / planetYears).toFixed(2))
      : parseFloat(((userLifeExpectancy - this.age) / planetYears).toFixed(2));

    return {
      planetAge: planetAge,
      yearsToLive: yearsToLive,
    };
  }
}