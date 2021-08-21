/* eslint-disable no-undef */
/// <reference types="cypress" />

const clickExpect = (curNumber) => {
  cy.get("#numclick").click();
  cy.wait(500);
  cy.get("#number").should("have.text", `${curNumber + 1}`);
};

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.get("#number").should("have.text", "0");
  });

  it("default number check", () => {
    cy.get("#number").should("have.text", "1");
  });

  it("number click", () => {
    clickExpect(1);
    clickExpect(2);
    clickExpect(3);
    clickExpect(4);
  });
});
