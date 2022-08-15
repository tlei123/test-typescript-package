import assert = require('assert'); // ignore ts warning; this is working
import { Num } from '../src/index';

describe('Num', () => {
  it('should add 2 new Num()s', () => {
    assert.equal(new Num(5).add(new Num(6)).val(), 11);
  });

  it('should convert value to string', () => {
    assert.equal(new Num(5).toString(), '5');
  });

  it('should add all new Num()s in array', () => {
    assert.equal(Num.addAll([new Num(5), new Num(2), new Num(13)]).val(), 20);
  });
});
