chai = require 'chai'
chaiAsPromised = require 'chai-as-promised'
chai.use(chaiAsPromised)
expect = chai.expect

module.exports = ->
    @Given /^I am on the homepage$/, (next)->
        browser.get('http://localhost:9000').then ->
                setTimeout next, 1000

    @Then /^I should see "([^"]*)"$/, (text, next) ->
        element(By.css('.xx')).getText().then (result) ->
            setTimeout next, 1000
