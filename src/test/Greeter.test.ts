import { Greeter } from '../index';

test('Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
});