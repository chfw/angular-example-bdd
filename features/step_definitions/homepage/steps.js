var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var steps = function(){

   this.Given(/^I am on the homepage$/, function(next){
       browser.get('http://localhost:9000').then(function(result){
          setTimeout(next, 1000);
       })
   });

   this.Then(/^I should see "([^"]*)"$/, function(text, next){
	   element(by.css(".xx")).getText().then(function(result){
           expect(result).equals(text);
     	   setTimeout(next, 1000);
       })
   });

};

module.exports = steps;
