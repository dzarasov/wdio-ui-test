var page = require('./page')
var LoginScreen = require('./LoginScreen.page')

var RetirementPlanningPage = Object.create(page, {
    clickOnLoginButton: { value: function () {
        browser.waitForExist('.user-control li a', 8000)
        $('.user-control li a').click()
        return LoginScreen
    }}
})

module.exports = RetirementPlanningPage
