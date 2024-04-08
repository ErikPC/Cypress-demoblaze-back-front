import { accounts } from "../fixtures/data/accounts";

describe("TEST BACK API ENDPOINT LOGIN & SIGNUP", () => {
  const requestBody = {
    username: accounts.backUser.name,
    password: accounts.backUser.password,
  };
  const requestMayonesa = {
    username: accounts.mayonesaUser.name,
    password: accounts.mayonesaUser.password,
  };
  const requestBodyBadPsw = {
    username: accounts.backUser.name,
    password: accounts.backUser.password,
  };

  it("CASE I SIGNUP CORRECT", () => {
    cy.request({
      method: "POST",
      url: "https://api.demoblaze.com/signup",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.errorMessage).to.eq(undefined);
    });
  });
  it("CASE 2 LOGIN CORRECT", () => {
    cy.request({
      method: "POST",
      url: "https://api.demoblaze.com/login",
      body: requestMayonesa,
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.errorMessage).to.eq(undefined);
    });
  });
  it("CASE 3 USER EXISTS", () => {
    cy.request({
      method: "POST",
      url: "https://api.demoblaze.com/signup",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.errorMessage).to.eq("This user already exist.");
    });
  });
  it("CASE 4 WRONG PASSWORD", () => {
    cy.request({
      method: "POST",
      url: "https://api.demoblaze.com/login",
      body: requestBodyBadPsw,
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.errorMessage).to.eq("Wrong password.");
    });
  });
});
