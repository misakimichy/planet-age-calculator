import { countries, planets, User } from '../src/app';

describe('User', function() {
  it('should return life expectancy', function() {
    const user = new User(10, countries.Japan);
    expect(user.calculateLifeExpectancy()).toEqual(83.7);
  });
  it('should error when passing an invalid country', function() {
    const user = new User(10, "Mexico");
    expect(function(){user.calculateLifeExpectancy();}).toThrow(new Error("Please choose country from the list."));
  });
  it('should calculate years to live', function() {
    const user1 = new User(10, countries.Japan, planets.Mercury);
    const result1 = user1.calculateAges();
    expect(result1.planetAge).toEqual(41.67);
    expect(result1.yearsToLive).toEqual(307.08);
    const user2 = new User(10, countries.Japan, planets.Venus);
    const result2 = user2.calculateAges();
    expect(result2.planetAge).toEqual(16.13);
    expect(result2.yearsToLive).toEqual(118.87);
    const user3 = new User(10, countries.Japan, planets.Mars);
    const result3 = user3.calculateAges();
    expect(result3.planetAge).toEqual(5.32);
    expect(result3.yearsToLive).toEqual(39.2);
    const user4 = new User(10, countries.Japan, planets.Jupiter);
    const result4 = user4.calculateAges();
    expect(result4.planetAge).toEqual(0.84);
    expect(result4.yearsToLive).toEqual(6.21);
  });
});