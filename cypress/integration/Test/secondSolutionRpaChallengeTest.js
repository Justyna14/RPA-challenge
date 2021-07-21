/*This is the second solution RPA challenge*/
import FillFormSecondSolution from "../../support/pageObjects/FillFormPageSecondSolution"
const testData = require("../../fixtures/testData.json");

//use visit() method and click "start"- Here, actions on elements have been placed in methods
describe("RPA challange test", () => {
  it("visit on page RPA Challange", () => {
    const fillForm = new FillFormSecondSolution;
    fillForm.visit();
    fillForm.clickStartButton()
  });
// I used forEach method, calls a function once for each element in an array from testData
  testData.forEach((challengeData) => {
    const data = {
      firstName: challengeData.firstName,
      lastName: challengeData.lastName,
      companyName: challengeData.companyName,
      roleInCompany: challengeData.roleInCompany,
      address: challengeData.address,
      email: challengeData.email,
      phoneNumber: challengeData.phoneNumber,
    };
//Reference to the 'FillFormSecondSolution' class and methods for specific text fields. 
//Here, actions on elements have been placed in methods,
//And test data passed as a function parameter 
    context(`Fill form for ${data.firstName} ${data.lastName}`, () => {
      it(`Successfully completed form for ${data.firstName} ${data.lastName}`, () => {
        const fillForm = new FillFormSecondSolution;
      
        fillForm.fillAllDataOnPage(data.firstName, data.lastName, data.companyName, data.roleInCompany, data.address, data.email, data.phoneNumber);
        fillForm.clickSubmit()
      });
    });
  });
});
//Check if the text 'Congratulations!' is visible
describe("Test is finished", () => {
  it('Text "Congratulations!" is visible', () => {
    const fillForm = new FillFormSecondSolution;
    fillForm.checkResult()
  });
});
