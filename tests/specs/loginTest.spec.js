var expect = require('chai').expect
var GooglePage = require('../pageobjects/Google.page')

describe('future advisor qa test', function () {
    var futureAdvisorPage
    var retirementPlanningPage
    var loginScreen

    it('login test', function () {
        GooglePage.open('https://www.google.com/')
        GooglePage.searchForString('futureadvisor.com \n')
        expect(GooglePage.getFirstResultHeader()).to.contain('FutureAdvisor')
        futureAdvisorPage = GooglePage.clickOnFirstResultFromSearch()
        expect(futureAdvisorPage.getPageTitle()).to.contain('Online Financial Advisor & Investing Advice')
        retirementPlanningPage = futureAdvisorPage.clickOnRetirementPlanning()
        loginScreen = retirementPlanningPage.clickOnLoginButton()
        loginScreen.setValueToLoginAndPasswordFields('somevalue@test.com', 'test12345')
        loginScreen.login()
        expect(loginScreen.getErrorText()).to.contain('Invalid email/password')
    })
})
