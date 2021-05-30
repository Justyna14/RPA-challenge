import { formIds } from "../dataTestElements/FormElementsFirstSolution";

class FillFormPageFirstSolution {
  public visit() {
    cy.visit("http://www.rpachallenge.com/");
    cy.url().should("include", "rpachallenge");
  }
  get startButton() {
    return cy.get(`${formIds.startButton}`);
  }
  get firstName() {
    return cy.get(`${formIds.firstName}`);
  }
  get lastName() {
    return cy.get(`${formIds.lastName}`);
  }
  get companyName() {
    return cy.get(`${formIds.companyName}`);
  }
  get roleInCompany() {
    return cy.get(`${formIds.roleInCompany}`);
  }
  get address() {
    return cy.get(`${formIds.address}`);
  }
  get email() {
    return cy.get(`${formIds.email}`);
  }
  get phoneNumber() {
    return cy.get(`${formIds.phoneNumber}`);
  }
  get congratMsg() {
    return cy.get(`${formIds.congratMessage}`);
  }
}
export const fillForm = new FillFormPageFirstSolution();
