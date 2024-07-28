"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCurrency = convertCurrency;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
function convertCurrency(amount, fromCurrency, toCurrency, conversionRates) {
    if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
        throw new Error("Invalid currency");
    }
    const amountInBaseCurrency = amount / conversionRates[fromCurrency];
    const convertedAmount = amountInBaseCurrency * conversionRates[toCurrency];
    return convertedAmount;
}
const conversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
};
router.post('/convert', (req, res) => {
    const { amount, fromCurrency, toCurrency } = req.body;
    if (!amount || !fromCurrency || !toCurrency) {
        return res.status(400).json({ error: 'Please provide amount, fromCurrency, and toCurrency' });
    }
    try {
        const result = convertCurrency(amount, fromCurrency, toCurrency, conversionRates);
        res.json({ amount: result });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.default = router;
