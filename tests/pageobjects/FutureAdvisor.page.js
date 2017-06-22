var page = require('./page')
var RetirementPlanningPage = require('./RetirementPlanningPage.page')

var FutureAdvisorPage = Object.create(page, {
    getPageTitle: { value: function () {
        return browser.getTitle()
    }},
    clickOnRetirementPlanning: { value: function () {
        browser.moveToObject('//*[@id="header"]/div/nav/ul/li[1]/a')
        browser.waitForExist('//*[@id="header"]/div/nav/ul/li[1]/ul/li[1]/a', 8000)
        $('//*[@id="header"]/div/nav/ul/li[1]/ul/li[1]/a').click()
        return RetirementPlanningPage
    }}
})

module.exports = FutureAdvisorPage
