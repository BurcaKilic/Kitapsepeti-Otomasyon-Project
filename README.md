Kitapsepeti.com E-Ticaret QA Otomasyon Projesi

Projenin Konusu

Bu proje Kitapsepeti.com sitesinin düzgün çalışıp çalışmadığını otomatik olarak test eden bir yazılımdır. Kullanıcının siteye girişten satın almaya kadar geçtiği adımlar, her seferinde manuel test etmek yerine otomatik olarak test edilmektedir.

Test Edilen Konular

Sitedeki 6 ana işlemi test edildi:

- US01 - Kullanıcı Girişi 
- US02 - Ürün Arama
- US03 - Ürün Detay Sayfası
- US04 - Sepet Yönetimi
- US05 - Ödeme Adımı
- US06 - Misafir Satın Alma

Toplam 50 test yazıldı. Hepsi başarıyla geçti.

Hangi Araçlar Kullanıldı?

MS Office Excel: Testlerin yazıldığı program.
Cypress: Testleri  çalıştıran program.
Json: Testlerin yazıldığı programlama dili.
Page Object Model: Her sayfanın kodunu ayrı dosyada tuttuk, böylece kod daha düzenli oldu.

Projeyi Çalıştırmak İçin Ne Gerekti?

Bilgisayarda Node.js, Cypress ve Visual Studio Code kurulu olmalı.


Projede Karşılaşılan Zorluklar

Scriptsler bilinmiyordu: Kitapsepeti'nin hangi buton veya kutunun hangi kodla çağrıldığını bilinmiyordu. Chrome'un geliştirici aracıyla her elementi tek tek bulundu.

Popup sorunu: Site açılınca çerez onayı ve kampanya penceresi çıkıyordu. Bunlar testleri engelliyordu. Her test başlamadan önce bu pencereleri kapatan bir kod yapay zekalar sayesinde yazıldı.

Geçersiz arama sonucu: Olmayan bir ürün arandığında site "bulunamadı" yazmıyor, sadece boş sayfa gösteriyor. Bunu göz önünde bulundurarak testi yeniden yazıldı.

Görseller geç yükleniyordu: Ürün resimleri sayfa açılınca hemen gelmiyor. Bu yüzden resim kontrolü yerine ürün adı ve fiyat kontrolü yapıldı. Test adımları arasındaki süreler de daha uzun tutuldu.

Site kod hataları: Kitapsepeti'nin kendi kodunda bazı hatalar vardı, bunlar testimizi durduruyordu. Bu hataları görmezden gelen bir ayarı yapay zekalar verdi. 

Türkçe karakter sorunu: Kod içinde Türkçe harf kullanınca bazı testler hata verdi. Türkçe harf içermeyen kelimelerle kontrol yapıldı. Bazı yerlerde de Türkçe karakter olmalıydı. Bazı testler bu sebeple de hata verdi.

Önemli Notlar

Testler gerçek Kitapsepeti sitesi üzerinde çalışmaktadır.
Hiçbir zaman gerçek sipariş oluşturulmadı, ödeme adımına gidilmedi.
Kullanıcı bilgileri tamamen sahte test verisidir. Sadece mail adresi testlerde kullanılmak için oluşturulmuş bir mail adresidir.