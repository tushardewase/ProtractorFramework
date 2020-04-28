let homepage = function () {

    let Input_first=  element(by.model('first'));
    let Input_secound=    element(by.model('second'));

    let Button_first= element(by.css('[ng-click="doAddition()"]'));

    this.getUrl=function (url) {
      browser.get(url);  
    };

    this.Input_first = function (firstNumber) {
      Input_first.sendKeys(firstNumber);  
    };

    
    this.Input_secound = function (secoundNumber) {
        Input_secound.sendKeys(secoundNumber);  
      };

      this.Button_first = function() {
        Button_first.click();  
      };

      this.verifyResult= function(result) {

        let chekOutput = element(by.cssContainingText('.ng-binding',result));
        expect(chekOutput.getText()).toEqual(result);
      };

     
};
module.exports= new homepage();   