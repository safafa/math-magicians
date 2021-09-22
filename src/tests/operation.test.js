import operate from '../logic/operate';

describe('operate function', () => {
  test('addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('minimizing', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });
});
