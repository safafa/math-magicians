import operate from '../logic/operate';

describe('operate function', () => {
  test('addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('minimizing', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  test('dividing', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });

  test('multiplying', () => {
    expect(operate(6, 2, 'x')).toBe('12');
  });

  test('modulating', () => {
    expect(operate(4, 2, '%')).toBe('0');
  });
});
