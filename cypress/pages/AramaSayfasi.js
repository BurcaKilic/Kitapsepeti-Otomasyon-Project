class AramaSayfasi {

    aramaSonucKontrol(text) {
        cy.get('body').should('contain.text', text)
    }

    gecersizAramaKontrol() {
    cy.url().should('include', 'arama')
    cy.get('.product-cr').should('not.exist')
    }

    ilkUrunKartKontrol() {
    cy.get('.product-detail-card', { timeout: 10000 }).should('have.length.greaterThan', 0)
    cy.get('.product-detail-card').first().find('.product-title').should('exist')
    cy.get('.product-detail-card').first().find('.product-price').should('exist')
    }

    ilkUrunSec() {
    cy.get('.product-detail-card').first().click({ force: true })
    cy.wait(3000)
    }

    siralamaKontrol() {
        cy.get('select').should('exist')
    }

    filtreKontrol() {
        cy.get('body').should('contain.text', 'Kategori')
    }

    scrollKontrol() {
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.get('.product-detail-card').should('have.length.greaterThan', 0)
    }

}

export default AramaSayfasi