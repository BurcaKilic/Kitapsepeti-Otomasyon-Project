import AnaSayfa from '../pages/AnaSayfa'
import AramaSayfasi from '../pages/AramaSayfasi'
import testData from '../fixtures/testData.json'

const anaSayfa = new AnaSayfa()
const aramaSayfasi = new AramaSayfasi()

describe('US02 Urun Arama ve Listeleme Testleri', () => {

    beforeEach(() => {
        anaSayfa.siteyeGit()
        anaSayfa.popupKapat()
    })

    it('TC10 | AC1 | Gecerli urun arama', () => {
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.aramaSonucKontrol(testData.searchData.validKeyword)
    })

    it('TC11 | AC2 | Gecersiz keyword arama', () => {
        anaSayfa.urunAra(testData.searchData.invalidKeyword)
        aramaSayfasi.gecersizAramaKontrol()
    })

    it('TC12 | AC3 | Urun kartlari gorunurlugu', () => {
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.ilkUrunKartKontrol()
    })

    it('TC13 | AC4 | Arama sonuc sayfasi acilmasi', () => {
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.aramaSonucKontrol(testData.searchData.validKeyword)
    })

    it('TC14 | AC5 | Arama input bos gonderme', () => {
        anaSayfa.urunAra(' ')
        aramaSayfasi.gecersizAramaKontrol()
    })

    it('TC15 | AC6 | Siralama menusunun varligi', () => {
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.siralamaKontrol()
    })

    it('TC16 | AC7 | Filtre panel kontrolu', () => {
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.filtreKontrol()
    })

    it('TC17 | AC8 | Scroll ile sonuc devam kontrolu', () => {
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.scrollKontrol()
    })

    it('TC18 | AC9 | Arama sonucu ilk urun secimi', () => {
        anaSayfa.urunAra(testData.searchData.validKeyword)
        aramaSayfasi.ilkUrunSec()
    })

})