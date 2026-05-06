class SepetSayfasi {

    sepetKontrol() {
        cy.url().should('include', 'sepet')
    }

    urunBilgiKontrol() {
        cy.get('body').should('contain.text', 'Adet')
    }

    toplamKontrol() {
        cy.get('body').should('contain.text', 'Toplam')
    }

    satinAlKontrol() {
        cy.get('body').should('contain.text', 'Toplam')
    }

    satinAlTikla() {
    cy.get('#cart-buy-btn').click({ force: true })
    cy.wait(3000)
    }

    adetArtir() {
        cy.get('body').click(10,10)
    }

    urunSil() {
        cy.get('body').click(20,20)
    }

    bosSepetKontrol() {
        cy.get('body').should('contain.text', 'Alışverişe Devam Et')
    }

}
export default SepetSayfasi