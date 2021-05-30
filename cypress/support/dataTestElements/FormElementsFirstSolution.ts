/*locating elements*/
class FormElementsFirstSolution {
    public firstName = '[ng-reflect-name="labelFirstName"]';
    public lastName = '[ng-reflect-name="labelLastName"]';
    public companyName = '[ng-reflect-name="labelCompanyName"]';
    public roleInCompany = '[ng-reflect-name="labelRole"]';
    public address = '[ng-reflect-name="labelAddress"]';
    public email = '[ng-reflect-name="labelEmail"]';
    public phoneNumber = '[ng-reflect-name="labelPhone"]'; 
    public submitButton = 'button[type=submit]';
    public startButton = '.btn-large';
    public congratMessage = '.message1';
  }
  
  export const formIds = new FormElementsFirstSolution();
  