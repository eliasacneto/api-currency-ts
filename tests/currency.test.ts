import { convertCurrency } from '../src/routes/currency';

describe('Currency conver API', () => {
    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110,
    };

    test('it should convert the currency USD to EUR', () => {
        const result = convertCurrency(100, 'USD', 'EUR', conversionRates);
        expect(result).toBeCloseTo(85);
    });

    test('it should convert the currency EUR to JPY', () => {
        const result = convertCurrency(85, 'EUR', 'JPY', conversionRates);
        expect(result).toBeCloseTo(11000);
    });


});
