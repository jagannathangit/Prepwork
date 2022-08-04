

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class retirementCalculatorPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputAge() {
        return $('#current-age');
    }

    get inputRetirementAge() {
        return $('#retirement-age');
    }

    get inputAnnualIncome () {
        return $('#current-income');
    }

    get inputSpouseAnnualIncome () {
        return $('#spouse-income');
    }

    get inputTotalSavings() {
        return $('#current-total-savings');
    }

    get inputAnnualSavings() {
        return $('#current-annual-savings');
    }

    get inputSavingsIncreaseRate() {
        return $('#savings-increase-rate');
    }

    get inputSocialBenefitsYes() {
        return $(`label[for='yes-social-benefits']`);
    }

    get inputSocialBenefitsNo() {
        return $(`label[for='no-social-benefits']`);
    }

    // get inputMaritalStatus() {
    //     return $(`label[for='married']`);
    // }

    get inputMaritalStatus() {
        return $(`//label[contains(text(),'Married')]`);
    }

    get inputSingleStatus() {
        return $(`label[for='single']`);
    }

    get inputSocialSecurityOverride() {
        return $(`#social-security-override`);
    }

    get btnCalculate () {
        return $(`.dsg-btn-primary.btn-block[onclick='calculateResults();']`);
    }

    get defaultValuesLink () {
        return $(`form#retirement-form a`);
    }

    get deafultModalTitle () {
        return $(`#default-values-modal-title`);
    }

    get inputAdditionalIncome () {
        return $(`#additional-income`);
    }

    get inputRetirementDuration () {
        return $(`#retirement-duration`);
    }

    get inputIncludeInflation () {
        return $(`label[for='include-inflation']`);
    }

    get inputExcludeInflation () {
        return $(`label[for='exclude-inflation']`);
    }

    get inputRetirementAnnualIncome () {
        return $(`#retirement-annual-income`);
    }
    get inputPreRetirementROI () {
        return $(`#pre-retirement-roi`);
    }
    get inputPostRetirementROI () {
        return $(`#post-retirement-roi`);
    }

    get saveDefaultValues () {
        return $(`//button[contains(text(),'Save changes')]`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async verifySocialSecurityBenefitFieldsIsDisplayed () {
        const $socialBenefitYes = this.inputSocialBenefitsYes
        await this.inputSocialBenefitsYes.click()
        let element = await $('#yes-social-benefits');;
        console.log(await element.isSelected()); // outputs: true
        await expect(element).toBeSelected()
        const $marriedOption =  await this.inputMaritalStatus
        await expect($marriedOption).toBeDisplayed()
        const $singleOption =  await this.inputSingleStatus
        await expect($singleOption).toBeDisplayed()
        const $socialSecurityOverideAmount =  await this.inputSocialSecurityOverride
        await expect($socialSecurityOverideAmount).toBeDisplayed()
    }

    async verifySocialSecurityBenefitFieldsIsNotDisplayed () {
        await this.inputSocialBenefitsNo.click()
        let element = await $('#no-social-benefits');;
        console.log(await element.isSelected()); // outputs: true
        await expect(element).toBeSelected()
        const $marriedOption =  await this.inputMaritalStatus
        await expect($marriedOption).not.toBeDisplayed();
        const $singleOption =  await this.inputSingleStatus
        await expect($singleOption).not.toBeDisplayed();
        const $socialSecurityOverideAmount =  await this.inputSocialSecurityOverride
        await expect($socialSecurityOverideAmount).not.toBeDisplayed();
    }

    async inputRetirementFormRequiredFields () {
        await this.inputAge.setValue("40");
        await this.inputRetirementAge.setValue("64");
        await this.inputAnnualIncome.click()
        await this.inputAnnualIncome.setValue(Number('123000'))
        await this.inputTotalSavings.click()
        await this.inputTotalSavings.setValue(Number('420000'))
        await this.inputAnnualSavings.setValue("10")
        await this.inputSavingsIncreaseRate.setValue("2")
        await this.inputSocialBenefitsYes.click()
        await this.inputMaritalStatus.click()
        await this.btnCalculate.click();
        await browser.waitUntil(
            async () => (await $('#calculator-results-container > h3').getText()) === 'Results',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
    }

    async inputRetirementFormAllFields () {
        await this.inputAge.setValue("40");
        await this.inputRetirementAge.setValue("68");
        await this.inputAnnualIncome.click()
        await this.inputAnnualIncome.setValue(Number('100000'))
        await this.inputSpouseAnnualIncome.click()
        await this.inputSpouseAnnualIncome.setValue(Number('75000'))
        await this.inputTotalSavings.click()
        await this.inputTotalSavings.setValue(Number('500000'))
        await this.inputAnnualSavings.setValue("10")
        await this.inputSavingsIncreaseRate.setValue("2")
        await this.inputSocialBenefitsYes.click()
        const marriedOption =  await this.inputMaritalStatus
        await marriedOption.waitForDisplayed({ timeout: 3000 });

        const singleOption =  await this.inputSingleStatus
        await singleOption.waitForDisplayed({ timeout: 3000 });
        await this.inputMaritalStatus.click()

        await this.inputSocialSecurityOverride.click()
        await this.inputSocialSecurityOverride.setValue(Number('4000'))
        await this.btnCalculate.click();
        await browser.waitUntil(
            async () => (await $('#calculator-results-container > h3').getText()) === 'Results',
            {
                timeout: 8000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );

    }    

    async adjustDefaultValues () {

        await this.inputAge.setValue("40");
        await this.inputRetirementAge.setValue("68");
        await this.inputAnnualIncome.click()
        await this.inputAnnualIncome.setValue(Number('100000'))
        await this.inputSpouseAnnualIncome.click()
        await this.inputSpouseAnnualIncome.setValue(Number('75000'))
        await this.inputTotalSavings.click()
        await this.inputTotalSavings.setValue(Number('500000'))
        await this.inputAnnualSavings.setValue("10")
        await this.inputSavingsIncreaseRate.setValue("2")
        await this.inputSocialBenefitsYes.click()
        const marriedOption =  await this.inputMaritalStatus
        await marriedOption.waitForDisplayed({ timeout: 3000 });
        const singleOption =  await this.inputSingleStatus
        await singleOption.waitForDisplayed({ timeout: 3000 });
        await this.inputMaritalStatus.click()
        await this.inputSocialSecurityOverride.click()
        await this.inputSocialSecurityOverride.setValue(Number('4000'))
        await this.defaultValuesLink.click()
        await browser.waitUntil(
            async () => (await $('#default-values-modal-title').getText()) === 'Default calculator values',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
        await this.inputAdditionalIncome.click()
        await this.inputAdditionalIncome.setValue(Number('500'))
        await this.inputRetirementDuration.setValue("20");
        await this.inputIncludeInflation.click()
        await this.inputRetirementAnnualIncome.setValue("75")
        await this.inputPreRetirementROI.setValue("8")
        await this.inputPostRetirementROI.setValue("5")
        await this.saveDefaultValues.click()
        await browser.waitUntil(
            async () => (await $(`section[id='calculator-intro-section'] h2`).getText()) === 'Pre-retirement calculator',
            {
                timeout: 8000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
        await this.btnCalculate.click();
        await browser.waitUntil(
            async () => (await $('#calculator-results-container > h3').getText()) === 'Results',
            {
                timeout: 8000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );

    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new retirementCalculatorPage();
