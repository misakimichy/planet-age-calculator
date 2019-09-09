import { countries, planets, User } from '../src/backend';

describe('User', function() {
  it('should return life expectancy', function() {
    const user = new User(10, countries.Japan);
    expect(user.calculateLifeExpectancy()).toEqual(83.7);
  });
  it('should error when passing an invalid country', function() {
    const user = new User(10, "Mexico");
    expect(function(){user.calculateLifeExpectancy();}).toThrow(new Error("Please choose country from the list."));
  });
  it('should return objects with keys of planetAge and yearsToLive', function() {
    const user1 = new User(10, countries.Japan, "Mercury");
    const result1 = user1.calculateAges();
    expect(result1.planetAge).toEqual(41.67);
    expect(result1.yearsToLive).toEqual(307.08);

    const user2 = new User(90, countries.Japan, "Mercury");
    const result2 = user2.calculateAges();
    expect(result2.yearsToLive).toEqual(26.25);
  });
});