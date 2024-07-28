"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currency_1 = require("../src/routes/currency");
describe('Currency conver API', () => {
    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110,
    };
    test('it should converts USD to EUR', () => {
        const result = (0, currency_1.convertCurrency)(100, 'USD', 'EUR', conversionRates);
        expect(result).toBeCloseTo(85);
    });
    test('it should convert EUR to JPY', () => {
        const result = (0, currency_1.convertCurrency)(85, 'EUR', 'JPY', conversionRates);
        expect(result).toBeCloseTo(11000 / 85);
    });
});
