import express, { Request, Response } from 'express';
const router = express.Router();

interface ConversionRates {
    [key: string]: number;
}

export function convertCurrency(amount: number, fromCurrency: string, toCurrency: string, conversionRates: ConversionRates): number {
    if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
        throw new Error("Invalid currency");
    }

    const amountInBaseCurrency = amount / conversionRates[fromCurrency];
    const convertedAmount = amountInBaseCurrency * conversionRates[toCurrency];

    return convertedAmount;
}

const conversionRates: ConversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
};

router.post('/convert', (req: Request, res: Response) => {
    const { amount, fromCurrency, toCurrency } = req.body;

    if (!amount || !fromCurrency || !toCurrency) {
        return res.status(400).json({ error: 'Please provide amount, fromCurrency, and toCurrency' });
    }

    try {
        const result = convertCurrency(amount, fromCurrency, toCurrency, conversionRates);
        res.json({ amount: result });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
