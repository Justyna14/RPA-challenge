/* This is the third solusion RPA challenge*/
import FillFormSecondSolution from "../../support/pageObjects/FillFormPageSecondSolution"
const testData = require("../../fixtures/testData.json");

describe("RPA challenge test", () => {
  it("visit on page RPA Challange", () => {
    const fillForm = new FillFormSecondSolution;
    fillForm.visit();
    fillForm.clickStartButton()
  });

//in this solution I practiced "for" loops :-) 
  for (let tab = 0; tab < testData.length; tab++) {
    const data = {
      firstName: testData[tab].firstName,
      lastName: testData[tab].lastName,
      companyName: testData[tab].companyName,
      roleInCompany: testData[tab].roleInCompany,
      address: testData[tab].address,
      email: testData[tab].email,
      phoneNumber: testData[tab].phoneNumber,
    };

    context(`Fill form for ${data.firstName} ${data.lastName}`, () => {
      it(`Succesfully completed form for ${data.firstName} ${data.lastName}`, () => {
        const fillForm = new FillFormSecondSolution;
      
        fillForm.fillAllDataOnPage(data.firstName, data.lastName, data.companyName, data.roleInCompany, data.address, data.email, data.phoneNumber);
        fillForm.clickSubmit()
      });
    });
  }
});
//Check if the text 'Congratulations!' is visible
describe("Test is finished", () => {
  it('Text "Congratulations!" is visible', () => {
    const fillForm = new FillFormSecondSolution;
    fillForm.checkResult()
  });
});
