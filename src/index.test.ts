import { letterCounter } from 'index';

describe('WHEN counting letters', () => {
  it('true should be true', () => {
    const result = letterCounter("liviuignat");
    expect(result["l"].occurences).toBe(1);
    expect(result["i"].occurences).toBe(3);
    expect(result["v"].occurences).toBe(1);
    expect(result["u"].occurences).toBe(1);
    expect(result["g"].occurences).toBe(1);
    expect(result["n"].occurences).toBe(1);
    expect(result["a"].occurences).toBe(1);
    expect(result["t"].occurences).toBe(1);

});
