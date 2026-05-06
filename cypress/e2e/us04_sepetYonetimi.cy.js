import AnaSayfa from '../pages/AnaSayfa'
import AramaSayfasi from '../pages/AramaSayfasi'
import UrunSayfasi from '../pages/UrunSayfasi'
import SepetSayfasi from '../pages/SepetSayfasi'
import testData from '../fixtures/testData.json'

const anaSayfa = new AnaSayfa()
const aramaSayfasi = new AramaSayfasi()
const urunSayfasi = new UrunSayfasi()
const sepetSayfasi = new SepetSayfasi()

describe('US04 Sepet Yonetimi Testleri', () => {

    beforeEach(() => {
        anaSayfa.siteyeGit()
        anaSayfa.popupKapat()
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.ilkUrunSec()
        urunSayfasi.sepeteEkle()
        urunSayfasi.sepeteGit()
    })

    it('TC27 | AC1 | Sepet sayfasi acilir', () => {
        sepetSayfasi.sepetKontrol()
    })

    it('TC28 | AC2 | Sepette urun bilgi kontrolu', () => {
        sepetSayfasi.urunBilgiKontrol()
    })

    it('TC29 | AC3 | Toplam tutar gorunurlugu', () => {
        sepetSayfasi.toplamKontrol()
    })

    it('TC30 | AC4 | Urun adet artirma', () => {
        sepetSayfasi.adetArtir()
    })

    it('TC31 | AC5 | Adet artisi sonrasi sepet stabil', () => {
        sepetSayfasi.adetArtir()
        sepetSayfasi.sepetKontrol()
    })

    it('TC32 | AC6 | Urun silme', () => {
        sepetSayfasi.urunSil()
    })

    it('TC33 | AC7 | Silme sonrasi bos sepet kontrol', () => {
        sepetSayfasi.urunSil()
        sepetSayfasi.bosSepetKontrol()
    })

    it('TC34 | AC8 | Satin al buton varligi', () => {
        sepetSayfasi.satinAlKontrol()
    })

    it('TC35 | AC9 | Satin al tiklanabilirligi', () => {
        sepetSayfasi.satinAlTikla()
    })

    it('TC36 | AC10 | Sepet sayfasi refresh stabilitesi', () => {
        cy.reload()
        sepetSayfasi.sepetKontrol()
    })

})