import { User, Planet } from '../src/main';

describe('User', function() {
  it('should return life expectancy', function() {
    const user1 = new User(10, "Japan");
    expect(user1.calculateLifeExpectancy()).toEqual(83.7);
    const user2 = new User(10, "Mexico");
    expect(function(){user2.calculateLifeExpectancy();}).toThrow(new Error("Please choose country from the list."));
  });
});

describe('Planet', function() {
  it('should calculate current age to palnet age', function() {
    const user = new User(10, "Japan");
    const planet1 = new Planet("Mercury");
    expect(planet1.calculateToPlanetAge(user)).toEqual(41.67);
    const planet2 = new Planet("Venus");
    expect(planet2.calculateToPlanetAge(user)).toEqual(16.13);
    const planet3 = new Planet("Mars");
    expect(planet3.calculateToPlanetAge(user)).toEqual(5.32);
    const planet4 = new Planet("Jupiter");
    expect(planet4.calculateToPlanetAge(user)).toEqual(0.84);
  }),
  it('should calculate years to live', function() {
    const user = new User(10, "Japan");
    const planet1 = new Planet("Mercury");
    expect(planet1.calculateLeftToLive(user)).toEqual(307.08);
    const planet2 = new Planet("Venus");
    expect(planet2.calculateLeftToLive(user)).toEqual(118.87);
    const planet3 = new Planet("Mars");
    expect(planet3.calculateLeftToLive(user)).toEqual(39.2);
    const planet4 = new Planet("Jupiter");
    expect(planet4.calculateLeftToLive(user)).toEqual(6.21);
  });
});