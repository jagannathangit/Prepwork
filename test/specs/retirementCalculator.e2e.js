const RetirementSavingsBasePage = require('../pageobjects/retirementCalculator.page');
const retirementResultsPage = require('../pageobjects/retirementCalculatorResults.page');

describe('Retirement savings calculator application', async() => {
    beforeEach(async () => {
        await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html')
    })
    
    it('User should be able to submit form with all required fields filled in', async () => {
        await RetirementSavingsBasePage.inputRetirementFormRequiredFields()
        await retirementResultsPage.verifyResultsPageElements()
    });
    it('User should be able to display additional Social Security fields when Social Security benefits toggle is enabled ', async () => {
        await RetirementSavingsBasePage.verifySocialSecurityBenefitFieldsIsDisplayed()
    });
    it('User should not be able to view additional Social Security fields when Social Security benefits toggle is disabled ', async () => {
        await RetirementSavingsBasePage.verifySocialSecurityBenefitFieldsIsNotDisplayed()
    });

    it('User should be able to submit form with all fields filledin', async () => {
        await RetirementSavingsBasePage.inputRetirementFormAllFields()
        await retirementResultsPage.verifyResultsPageElements()
    });

    it('User should be able to update default calculator values', async () => {
        await RetirementSavingsBasePage.adjustDefaultValues()
        await retirementResultsPage.verifyResultsPageElements()
    });

});


