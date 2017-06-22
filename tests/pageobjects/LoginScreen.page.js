var page = require('./page')

var LoginScreenPage = Object.create(page, {
    setValueToLoginAndPasswordFields: { value: function (username, password) {
        browser.waitForExist('.form-control', 8000)
        $$('.form-control')[0].setValue(username)
        $$('.form-control')[1].setValue(password)
    }},
    login: { value: function () {
        $('//div[1]/form/button').click()
    }},
    getErrorText: { value: function () {
        browser.waitForExist('.error', 8000)
        return $('.error').getText()
    }}
})

module.exports = LoginScreenPage
