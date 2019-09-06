import { CurrentStatus } from '../src/main';

const h1 = new CurrentStatus(10, "Japan", false, false);
describe('currentStatus', function() {
  it('should return age', function() {
    expect(h1.returnAge()).toEqual(10);
  });
});