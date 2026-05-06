# Kitapsepeti Cypress Otomasyon Test Projesi

## Projenin Amacı

Bu proje, Kitapsepeti e-ticaret platformunda kullanıcının satın alma deneyimini etkileyen temel fonksiyonların kalite kontrolünü sağlamak amacıyla hazırlanmıştır.

Canlı sistem üzerinde;

- kullanıcı girişi,
- ürün arama ve listeleme,
- ürün detay sayfası inceleme,
- sepete ekleme,
- sepet yönetimi,
- ödeme adımları
ve
- misafir olarak satın alma

süreçleri Cypress kullanılarak otomasyon kapsamına alınmıştır.

---

## Proje Kapsamındaki User Story'ler

- US01 - Kullanıcı Girişi
- US02 - Ürün Arama ve Listeleme
- US03 - Ürün Detay Sayfası ve Sepete Ekleme
- US04 - Sepet Yönetimi ve Kontrolü
- US05 - Ödeme ve Sipariş Onayı
- US06 - Misafir Olarak Satın Alma Akışı

---

## Test Kapsamı ve İzlenebilirlik

Projede toplam 50 adet test senaryosu hazırlanmış ve bu senaryoların tamamı Cypress ile otomasyona alınmıştır.

Tüm testler;

- TC (Test Case) numarası
- AC (Acceptance Criteria) numarası

ile eşleştirilmiş, böylece tüm acceptance criteriaların hangi otomasyon testi ile doğrulandığı izlenebilir hale getirilmiştir.

---

## Kullanılan Teknolojiler

- JavaScript
- Cypress
- Page Object Model (POM)
- Fixture Data Management

---

## Proje Mimarisi

Kod okunabilirliğini ve sürdürülebilirliğini artırmak amacıyla Page Object Model mimarisi tercih edilmiştir.

Klasör yapısı:

- cypress/e2e → User Story bazlı test dosyaları
- cypress/pages → Sayfa bazlı ortak methodlar
- cypress/fixtures → Test verileri
- cypress/support → Global hata yönetimi

---

## Test Verisi Yönetimi

Kullanıcı bilgileri, arama kelimeleri ve diğer tüm test verileri `testData.json` dosyası üzerinden yönetilmektedir.

Bu yapı sayesinde test senaryoları içinde sabit veri kullanımı azaltılarak daha esnek bir otomasyon yapısı kurulmuştur.

---

## Teknik Zorluklar ve Çözümler

Canlı production ortamında karşılaşılan popup, reklam katmanı ve JavaScript tabanlı uncaught exception hataları otomasyon akışını kesintiye uğrattığı için gerekli exception handling ve force click çözümleri uygulanmıştır.

Bu sayede test akışlarının daha stabil şekilde çalışması sağlanmıştır.

---

## Proje Sonucu

Kitapsepeti platformunda kullanıcı deneyimini etkileyen kritik e-ticaret akışlarına ait fonksiyonlar regression mantığıyla test edilmiş ve otomasyon kapsamına alınmıştır.

Hazırlanan framework sayesinde testlerin izlenebilirliği, yeniden kullanılabilirliği ve sürdürülebilirliği artırılmıştır.