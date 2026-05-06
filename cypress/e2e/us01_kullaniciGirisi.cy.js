import AnaSayfa from '../pages/AnaSayfa'
import GirisSayfasi from '../pages/GirisSayfasi'
import testData from '../fixtures/testData.json'

const anaSayfa = new AnaSayfa()
const girisSayfasi = new GirisSayfasi()

describe('US01 Kullanici Girisi Testleri', () => {

    beforeEach(() => {
        anaSayfa.siteyeGit()
        anaSayfa.popupKapat()
        anaSayfa.girisPopupAc()
    })

    it('TC01 | AC1 | Giris popup acilmasi', () => {
        girisSayfasi.formAlanKontrol()
    })

    it('TC02 | AC2 | Email ve sifre alan gorunurlugu', () => {
        girisSayfasi.formAlanKontrol()
    })

    it('TC03 | AC3 | Gecerli bilgilerle basarili giris', () => {
        girisSayfasi.emailGir(testData.validUser.email)
        girisSayfasi.sifreGir(testData.validUser.password)
        girisSayfasi.girisButonTikla()
        girisSayfasi.basariliGirisKontrol()
    })

    it('TC04 | AC4 | Yanlis sifre ile giris', () => {
        girisSayfasi.emailGir(testData.validUser.email)
        girisSayfasi.sifreGir(testData.invalidUser.password)
        girisSayfasi.girisButonTikla()
        girisSayfasi.hataliGirisKontrol()
    })

    it('TC05 | AC5 | Kayitsiz email ile giris', () => {
        girisSayfasi.emailGir(testData.invalidUser.email)
        girisSayfasi.sifreGir(testData.invalidUser.password)
        girisSayfasi.girisButonTikla()
        girisSayfasi.hataliGirisKontrol()
    })

    it('TC06 | AC6 | Hatali email format girisi', () => {
        girisSayfasi.emailGir(testData.invalidFormatUser.email)
        girisSayfasi.sifreGir(testData.invalidFormatUser.password)
        girisSayfasi.girisButonTikla()
        girisSayfasi.formAlanKontrol()
    })

    it('TC07 | AC7 | Bos alan ile giris denemesi', () => {
        girisSayfasi.emailGir(testData.emptyUser.email)
        girisSayfasi.sifreGir(testData.emptyUser.password)
        girisSayfasi.girisButonTikla()
        girisSayfasi.formAlanKontrol()
    })

    it('TC08 | AC8 | Ardisik hatali giris denemeleri', () => {
        girisSayfasi.emailGir(testData.invalidUser.email)
        girisSayfasi.sifreGir(testData.invalidUser.password)
        girisSayfasi.girisButonTikla()
        girisSayfasi.emailGir(testData.invalidUser.email)
        girisSayfasi.sifreGir(testData.invalidUser.password)
        girisSayfasi.girisButonTikla()
        girisSayfasi.hataliGirisKontrol()
    })

    it('TC09 | AC9 | Sifremi unuttum yonlendirmesi', () => {
        girisSayfasi.sifremiUnuttumTikla()
        girisSayfasi.sifreHatirlatKontrol()
    })

})