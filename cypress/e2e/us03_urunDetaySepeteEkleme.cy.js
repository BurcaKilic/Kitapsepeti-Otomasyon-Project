import AnaSayfa from '../pages/AnaSayfa'
import AramaSayfasi from '../pages/AramaSayfasi'
import UrunSayfasi from '../pages/UrunSayfasi'
import testData from '../fixtures/testData.json'

const anaSayfa = new AnaSayfa()
const aramaSayfasi = new AramaSayfasi()
const urunSayfasi = new UrunSayfasi()

describe('US03 Urun Detay ve Sepete Ekleme Testleri', () => {

    beforeEach(() => {
        anaSayfa.siteyeGit()
        anaSayfa.popupKapat()
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.ilkUrunSec()
    })

    it('TC19 | AC1 | Urun detay sayfasi acilir', () => {
        urunSayfasi.detayKontrol()
    })

    it('TC20 | AC2 | Urun bilgi alanlari gorunur', () => {
        urunSayfasi.bilgiKontrol()
    })

    it('TC21 | AC3 | Urun fiyat bilgisi gorunur', () => {
        urunSayfasi.fiyatKontrol()
    })

    it('TC22 | AC4 | Sepete ekle butonu gorunur', () => {
        urunSayfasi.detayKontrol()
    })

    it('TC23 | AC5 | Sepete ekleme islemi', () => {
        urunSayfasi.sepeteEkle()
        urunSayfasi.popupKontrol()
    })

    it('TC24 | AC6 | Sepete git popup kontrolu', () => {
        urunSayfasi.sepeteEkle()
        urunSayfasi.popupKontrol()
    })

    it('TC25 | AC7 | Popup sonrasi sepet yonlendirme', () => {
        urunSayfasi.sepeteEkle()
        urunSayfasi.sepeteGit()
    })

    it('TC26 | AC8 | Urun detay refresh stabilitesi', () => {
        cy.reload()
        urunSayfasi.detayKontrol()
    })

})