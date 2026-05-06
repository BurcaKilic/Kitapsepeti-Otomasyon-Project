import AnaSayfa from '../pages/AnaSayfa'
import AramaSayfasi from '../pages/AramaSayfasi'
import UrunSayfasi from '../pages/UrunSayfasi'
import SepetSayfasi from '../pages/SepetSayfasi'
import OdemeSayfasi from '../pages/OdemeSayfasi'
import testData from '../fixtures/testData.json'

const anaSayfa = new AnaSayfa()
const aramaSayfasi = new AramaSayfasi()
const urunSayfasi = new UrunSayfasi()
const sepetSayfasi = new SepetSayfasi()
const odemeSayfasi = new OdemeSayfasi()

describe('US05 Odeme ve Siparis Onayi Testleri', () => {

    beforeEach(() => {
        anaSayfa.siteyeGit()
        anaSayfa.popupKapat()
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.ilkUrunSec()
        urunSayfasi.sepeteEkle()
        urunSayfasi.sepeteGit()
        sepetSayfasi.satinAlTikla()
    })

    it('TC37 | AC1 | Satin al ile siparis adimina gecis', () => {
        odemeSayfasi.adresKontrol()
    })

    it('TC38 | AC2 | Adres form gorunurlugu', () => {
        odemeSayfasi.adresFormKontrol()
    })

    it('TC39 | AC3 | Teslimat adimi kontrolu', () => {
        odemeSayfasi.adresKontrol()
    })

    it('TC40 | AC4 | Odeme yontemi kontrolu', () => {
        odemeSayfasi.odemeYontemKontrol()
    })

    it('TC41 | AC5 | Siparis ozeti gorunurlugu', () => {
        odemeSayfasi.siparisOzetiKontrol()
    })

    it('TC42 | AC6 | Sayfa refresh sonrasi siparis adimi', () => {
        cy.reload()
        odemeSayfasi.adresKontrol()
    })

    it('TC43 | AC7 | Siparis ozeti veri devami', () => {
        odemeSayfasi.siparisOzetiKontrol()
    })

    it('TC44 | AC8 | Odeme adimi stabilitesi', () => {
        odemeSayfasi.odemeYontemKontrol()
    })

})