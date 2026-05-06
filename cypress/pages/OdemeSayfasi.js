class OdemeSayfasi {

    adresKontrol() {
        cy.url().should('include', 'siparis')
    }

    adresFormKontrol() {
        cy.get('body').should('contain.text', 'Adres')
    }

    odemeYontemKontrol() {
        cy.get('body').should('contain.text', 'Adres')
    }

    siparisOzetiKontrol() {
        cy.get('body').should('contain.text', 'Sepet')
    }

    guestKontrol() {
        cy.url().should('include', 'siparis-uye-giris')
    }

}
export default OdemeSayfasi