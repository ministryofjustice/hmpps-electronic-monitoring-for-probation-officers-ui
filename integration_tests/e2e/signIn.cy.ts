import WelcomePage from '../pages/WelcomePage'
import Page from '../pages/page'

context('Sign In', () => {
  beforeEach(() => {})

  it('Unauthenticated user directed to auth', () => {
    cy.visit('/')
    Page.verifyOnPage(WelcomePage)
  })
})
