/*This is the first solution RPA challenge*/
import { fillForm } from "../../support/pageObjects/FillFormPageFirstSolution"
const testData = require("../../fixtures/testData.json");

//use visit() method and click "start"
describe("RPA challenge test", () => {
  it("visit on page RPA Challenge", () => {
    fillForm.visit();
    fillForm.startButton.click();
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
//Reference to the 'FillFormPageFirstSolution' class and methods for specific text fields. 
    context(`Fill form for ${data.firstName} ${data.lastName}`, () => {
      it(`Successfully completed form for ${data.firstName} ${data.lastName}`, () => {
        fillForm.firstName.type(data.firstName);
        fillForm.lastName.type(data.lastName);
        fillForm.companyName.type(data.companyName);
        fillForm.roleInCompany.type(data.roleInCompany);
        fillForm.address.type(data.address);
        fillForm.email.type(data.email);
        fillForm.phoneNumber.type(`${data.phoneNumber}{enter}`);
      });
    });
  });
});
//Check if the text 'Congratulations!' is visible
describe("Test is finished", () => {
  it('Text "Congratulations!" is visible', () => {
    fillForm.congratMsg.should('have.text', 'Congratulations!');
  });
});
