import { countries, planets, User, Planet } from '../src/app';

describe('User', function() {
  it('should return life expectancy', function() {
    const user = new User(10, countries.Japan);
    expect(user.calculateLifeExpectancy()).toEqual(83.7);
  });
  it('should error when passing an invalid country', function() {
    const user = new User(10, "Mexico");
    expect(function(){user.calculateLifeExpectancy();}).toThrow(new Error("Please choose country from the list."));
  });
});

describe('Planet', function() {
  it('should calculate years to live', function() {
    const user = new User(10, countries.Japan);
    const planet1 = new Planet(planets.Mercury);
    const result1 = planet1.calculateAges(user);
    expect(result1.planetAge).toEqual(41.67);
    expect(result1.yearsToLive).toEqual(307.08);
    const planet2 = new Planet(planets.Venus);
    const result2 = planet2.calculateAges(user);
    expect(result2.planetAge).toEqual(16.13);
    expect(result2.yearsToLive).toEqual(118.87);
    const planet3 = new Planet(planets.Mars);
    const result3 = planet3.calculateAges(user);
    expect(result3.planetAge).toEqual(5.32);
    expect(result3.yearsToLive).toEqual(39.2);
    const planet4 = new Planet(planets.Jupiter);
    const result4 = planet4.calculateAges(user);
    expect(result4.planetAge).toEqual(0.84);
    expect(result4.yearsToLive).toEqual(6.21);
  });
})