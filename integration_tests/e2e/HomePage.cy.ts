import HomePage from '../pages/HomePage'
import Page from '../pages/page'

context('Home Page', () => {
  beforeEach(() => {})

  it('shows the welcome page with title', () => {
    cy.visit('/')
    Page.verifyOnPage(HomePage)
  })

  it('shows the welcome page with title and passes accessiblity scan', () => {
    cy.visit('/')
    cy.injectAxe()
    Page.verifyOnPage(HomePage)
    cy.checkA11y()
  })
})
