import { cyan } from "color-name";
import { AssertionError } from "assert";

/*
Task #4
Write down a simple integration test to the task #3 you did before.
No need to check all the data retrieved by the button pushing. Just a Company name would be enough !
*/
describe("Test to be fulfilled by the candidate", () => {
  it("push the button implemented on task #3 and shows the company names", () => {
    cy.visit("http://localhost:4200");
    cy.get("#get_companies")
      .click()
      .then((response) => {
        cy.log(response);
        /* expect(response.status).to.equal(200); */
      }); /* expect(true).to.equal(false); */ //replace me !
  });
});
