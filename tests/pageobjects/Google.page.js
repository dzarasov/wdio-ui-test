var page = require('./page')
var FutureAdvisorPage = require('./FutureAdvisor.page')

var GooglePage = Object.create(page, {
    searchForString: { value: function (search) {
        $('#lst-ib').setValue(search)
    }},
    getFirstResultHeader: { value: function () {
        browser.waitForExist('.r', 8000)
        return $$('.r a')[0].getText()
    }},
    clickOnFirstResultFromSearch: { value: function () {
        browser.waitForExist('.r', 8000)
        $$('.r')[0].click()
        return FutureAdvisorPage
    }}
})

module.exports = GooglePage
