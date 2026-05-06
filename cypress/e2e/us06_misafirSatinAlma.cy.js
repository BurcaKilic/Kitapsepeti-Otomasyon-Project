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

describe('US06 Misafir Satin Alma Testleri', () => {

    beforeEach(() => {
        anaSayfa.siteyeGit()
        anaSayfa.popupKapat()
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.ilkUrunSec()
        urunSayfasi.sepeteEkle()
        urunSayfasi.sepeteGit()
        sepetSayfasi.satinAlTikla()
    })

    it('TC45 | AC1 | Uye olmadan devam et secenegi', () => {
        odemeSayfasi.guestKontrol()
    })

    it('TC46 | AC2 | Guest adres formu', () => {
        odemeSayfasi.adresFormKontrol()
    })

    it('TC47 | AC3 | Guest siparis adimi gorunurluk', () => {
        odemeSayfasi.adresKontrol()
    })

    it('TC48 | AC4 | Guest odeme yontemi', () => {
        odemeSayfasi.odemeYontemKontrol()
    })

    it('TC49 | AC5 | Guest siparis ozeti', () => {
        odemeSayfasi.siparisOzetiKontrol()
    })

    it('TC50 | AC6 | Guest akis refresh stabilitesi', () => {
        cy.reload()
        odemeSayfasi.guestKontrol()
    })

})