import HomePage from '../pages/HomePage'
import Page from '../pages/page'
import logA11yViolationsWithDescription from '../support/logging/logA11yViolationsWithDescription'

context('Home Page', () => {
  beforeEach(() => {})

  it('shows the welcome page with title', () => {
    cy.visit('/')
    Page.verifyOnPage(HomePage)
  })

  it('shows the welcome page with title and passes accessiblity scan', () => {
    cy.visit('/')
    Page.verifyOnPage(HomePage)
    cy.injectAxe()

    cy.checkA11y(null, null, logA11yViolationsWithDescription)
  })
})
