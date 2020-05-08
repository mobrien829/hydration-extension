describe("loads page", function () {
  it("visits the page", function () {
    cy.visit("/");
  });
  it("links to author's github, and repo", function () {
    cy.get('a[href="https://github.com/mobrien829"]');
    cy.get('a[href="https://github.com/mobrien829/hydration-extension"]');
  });
});

describe("glass fills", function () {
  it("glass counter can be clicked on", function () {
    cy.get(".glass-counter").click();
  });
  it("resets when reset button is pushed", function () {
    cy.get(".reset-button").click();
  });
  it("increments on click", function () {
    cy.get(".glass-counter")
      .click()
      .then(($num) => {
        const num1 = $num.text();
        expect(num1).to.not.equal(0);
      });
  });
  it("stores information in localStorage", function () {
    cy.get(".glass-counter")
      .click()
      .then(() => {
        expect(JSON.parse(localStorage.getItem("waterGlass"))).to.have.all.keys(
          "amount",
          "todaysDate",
          "time"
        );
      });
  });
});

describe("tracks times of fills", function () {
  it("has a list of drink timings", function () {
    cy.get(".time-list");
  });
});
