import { User, Planet } from '../src/main';

describe('User', function() {
  it('should return life expectancy', function() {
    const user = new User(10, "Japan");
    expect(user.calculateLifeExpectancy()).toEqual(83.7);
  });
});

describe('Planet', function() {
  it('should calculate years to live', function() {
    const user = new User(10, "Japan");
    const planet = new Planet("Mercury");
    expect(planet.calculateLeftToLive(user)).toEqual(42.03);
  });
});