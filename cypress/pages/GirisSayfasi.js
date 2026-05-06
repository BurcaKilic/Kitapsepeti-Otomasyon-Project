class GirisSayfasi {

    formAlanKontrol() {
        cy.get('#header-email').should('exist')
        cy.get('input[type="password"]').should('exist')
    }

    emailGir(email) {
    cy.get('#header-email').clear()
    if (email !== '') {
        cy.get('#header-email').type(email, { force: true })
    }
}

sifreGir(sifre) {
    cy.get('input[type="password"]').first().clear()
    if (sifre !== '') {
        cy.get('input[type="password"]').first().type(sifre, { force: true })
    }
}

    girisButonTikla() {
        cy.get('button[id^="login-btn-"]').click({ force: true })
        cy.wait(2000)
    }

    basariliGirisKontrol() {
    cy.get('body').should('not.contain.text', 'E-posta ile Giriş')
    cy.get('body').should('contain.text', 'Sepetim')
    }

    hataliGirisKontrol() {
    cy.get('#header-email').should('exist')
    cy.get('button[id^="login-btn-"]').should('exist')
    }

    sifremiUnuttumTikla() {
        cy.contains('Şifremi Unuttum').click({ force: true })
    }

    sifreHatirlatKontrol() {
        cy.get('body').should('contain.text', 'Şifremi Unuttum')
    }

}

export default GirisSayfasi