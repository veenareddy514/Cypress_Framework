describe("Using find in cypress",()=>{
    it("Locate child elements inside parent element",()=>{
        //Open website
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get('#login').find("input").should("have.length",2)
        cy.wait(2000)
        cy.get("#login").find('[name="username"]').type("tomsmith")
        cy.get("#login").find('[name="password"]').type("SuperSecretPassword!")
        cy.wait(1000)
        cy.get('#login').find("button").contains(" Login").click()
        cy.url().should("include",'/secure')


    })


})