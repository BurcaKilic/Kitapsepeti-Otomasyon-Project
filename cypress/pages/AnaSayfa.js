class AnaSayfa {

    siteyeGit() {
        cy.visit('https://www.kitapsepeti.com/')
        cy.wait(3000)
    }

    popupKapat() {
        cy.wait(1500)

        cy.get('body').then(($body) => {
            if ($body.find('button.cc-nb-okagree').length > 0) {
                cy.get('button.cc-nb-okagree').click({ force: true })
            }
        })

        cy.wait(500)

        cy.get('body').then(($body) => {
            if ($body.find('#t-modal-close-1').length > 0) {
                cy.get('#t-modal-close-1').click({ force: true })
            }
        })

        cy.wait(500)

        cy.get('body').then(($body) => {
            if ($body.find('.t-modal-backdrop').length > 0) {
                cy.get('.t-modal-backdrop').click({ force: true })
            }
        })

        cy.wait(500)

        cy.get('body').type('{esc}', { force: true })
    }

    girisPopupAc() {
        cy.contains('Hesabım').click({ force: true })
        cy.contains('E-posta ile Giriş').click({ force: true })
        cy.wait(1000)
    }

    urunAra(urunAdi) {
        cy.get('input[id="live-search"]').clear().type(urunAdi, { force: true })
        cy.get('#live-search-btn').click({ force: true })
        cy.wait(3000)
    }

}

export default AnaSayfa