import operate from '../logic/operate';
import calculate from '../logic/calculate';

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

describe('Calculate function', () => {
  const obj = {
    total: 15,
    next: 5,
    operation: '+',
  };

  test('Clearing the screen', () => {
    expect({ ...calculate(obj, 'AC') }).toEqual({ total: 0, next: null, operation: null });
  });

  test('total the number', () => {
    expect(calculate(obj, '=')).toEqual({ total: '20', next: null, operation: null });
  });
});
