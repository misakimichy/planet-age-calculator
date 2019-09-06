import { CurrentStatus } from '../src/main';

const h1 = new CurrentStatus(10, "Japan", false, false);
describe('currentStatus', function() {
  it('should return age', function() {
    expect(h1.returnAge()[0]).toEqual(41.67);
    expect(h1.returnAge()[1]).toEqual(16.13);
    expect(h1.returnAge()[2]).toEqual(5.32);
    expect(h1.returnAge()[3]).toEqual(0.84);
  });
});