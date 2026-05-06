class UrunSayfasi {

    detayKontrol() {
        cy.get('body').should('contain.text', 'Sepete Ekle')
    }

    bilgiKontrol() {
        cy.get('body').should('contain.text', 'Yazar')
    }

    fiyatKontrol() {
        cy.get('body').should('contain.text', 'TL')
    }

    sepeteEkle() {
        cy.contains('Sepete Ekle').click({ force: true })
        cy.wait(1500)
    }

    popupKontrol() {
        cy.get('body').should('contain.text', 'Sepete Git')
    }

    sepeteGit() {
        cy.contains('Sepete Git').click({ force: true })
        cy.wait(1500)
    }

}
export default UrunSayfasi