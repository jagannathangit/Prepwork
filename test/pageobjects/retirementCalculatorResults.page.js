
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class retirementCalculatorResultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get getResultsMessage () {
        return $('#result-message');
    }

    get getResultsChart () {
        return $('#results-chart');
    }

    get getRetirementAmountResult () {
        return $('#retirement-amount-results');
    }
    get getCurrentSavingsResult () {
        return $('#current-savings-results');
    }

    async verifyResultsPageElements () {
        const $resultsMessage =  await this.getResultsMessage
        await expect($resultsMessage).toBeDisplayed()
        const $resultsChart =  await this.getResultsChart
        await expect($resultsChart).toBeDisplayed()
        const $retirementAmountResult=  await this.getRetirementAmountResult
        await expect($retirementAmountResult).toBeDisplayed()
        const $currentSavingsResult=  await this.getCurrentSavingsResult
        await expect($currentSavingsResult).toBeDisplayed()
    }
}

module.exports = new retirementCalculatorResultsPage();