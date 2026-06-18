describe('URL Check', () => {
  it('URL should contain cypress', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('include', 'cypress')
    
  })
})
