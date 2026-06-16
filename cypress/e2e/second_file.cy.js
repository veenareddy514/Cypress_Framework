describe('Fixture Example', () => {
  it('uses data from fixture file', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('user').then((data) => {
      cy.get('#user-name').type(data.username)
      cy.get('[name="password"]').type(data.password)
      cy.get('#login-button').click()
    })
  })
})
