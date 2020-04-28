let homepage=require('../pages/Homepage');

describe('demo calculater demo',function(){
    it('addition Test',function(){

        //browser.get('https://juliemr.github.io/protractor-demo/);
        homepage.getUrl('https://juliemr.github.io/protractor-demo/');
  
        //element(by.model('first').sendkeys('3'));
        homepage.Input_first('5');

       //element(by.model('second').sendkeys('3'));
       homepage.Input_secound('3');
       
       //element(by.css('[ng-click="doAddition()]')).click();
       homepage.Button_first(); 
       
       //let result =element(by.cssContainingText('.ng-binding','5'));
       //expect(result.getText()).toequal('5');
       homepage.verifyResult('8');
       
        browser.sleep(10000)
    });

    it('substration Test',function(){
        
    });

 
});