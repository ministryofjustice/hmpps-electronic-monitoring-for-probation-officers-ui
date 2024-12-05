import Page, { PageElement } from './page'

export default class IndexPage extends Page {
  constructor() {
    super('Welcome to Electronic Monitoring For Probation Officers')
  }

  headerUserName = (): PageElement => cy.get('[data-qa=header-user-name]')

  headerPhaseBanner = (): PageElement => cy.get('[data-qa=header-phase-banner]')
}
