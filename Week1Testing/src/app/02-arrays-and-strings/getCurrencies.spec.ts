import { getCurrencies } from './getcurrencies';

describe('getCurrencies', () => {
    it('Should returrn EUR, GBP, USD', () => {
        const result = getCurrencies();
        expect(result).toContain('EUR');
        expect(result).toContain('GBP');
        expect(result).toContain('USD');
    });
});
