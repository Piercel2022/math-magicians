import operate from './operate';

describe('Operate Function', () => {
  test('correctly returns 25 when 13 + 12 is summed', () => {
    expect(operate('13', '12', '+')).toBe('25');
  });

  test('correctly returns 3 when 17 is subtracted from 20', () => {
    expect(operate('20', '17', '-')).toBe('3');
  });

  test('correctly returns 5 when 25 is divided by 5', () => {
    expect(operate('25', '5', '÷')).toBe('5');
  });

  test("correctly returns Can't divide by 0 when 50 is divided by 0", () => {
    expect(operate('120', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('correctly returns 100 when 10 is multiplied by 10', () => {
    expect(operate('10', '10', 'x')).toBe('100');
  });

  test('correctly returns remainder 3 when 45 is divided by 6', () => {
    expect(operate('45', '6', '%')).toBe('3');
  });
});
