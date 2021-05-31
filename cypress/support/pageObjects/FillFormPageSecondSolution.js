import { formElementsSecondSolution } from "../dataTestElements/FormElementsSecondSolution";
const testData = require("../../fixtures/testData.json");

class FillFormPageSecondSolution {

    visit() {
        cy.visit("http://www.rpachallenge.com/");
        cy.url().should("include", "rpachallenge");
        return this;
    }

    clickStartButton(){
        cy.get(`${formElementsSecondSolution.startButton}`).click();
        return this;
    }
    
    fillAllDataOnPage(firstName, lastName, companyName, roleInCompany, address, email, phoneNumber) {
        
        cy.get(`${formElementsSecondSolution.firstName}`).type(firstName);
        cy.get(`${formElementsSecondSolution.lastName}`).type(lastName);
        cy.get(`${formElementsSecondSolution.companyName}`).type(companyName);
        cy.get(`${formElementsSecondSolution.roleInCompany}`).type(roleInCompany);
        cy.get(`${formElementsSecondSolution.address}`).type(address);
        cy.get(`${formElementsSecondSolution.email}`).type(email);
        cy.get(`${formElementsSecondSolution.phoneNumber}`).type(phoneNumber);

        return this;
    }
    
    clickSubmit() {
        cy.get(`${formElementsSecondSolution.submitButton}`).click();
    }

    checkResult(){
        cy.contains('Congratulations!')
    }
}
export default FillFormPageSecondSolution;