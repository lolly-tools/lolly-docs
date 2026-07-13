# Lolly nasıl karşılaştırılır

Bu platformun daha geniş yaratıcı araçlar ortamında nerede durduğu ve kasıtlı olarak **oynamadığı** yer.

> **Pilot durumu:** Lolly kapalı bir pilot prototipidir, bitmiş bir ürün değildir ve güvenliği şu anda kurumsal ölçeğe hazırlık olarak SUSE'nin sıkı altyapı sertleştirme sürecinden geçmektedir. Bu konumlandırma Lolly'nin *hedeflediği* yeri gösterir - [Benimseme ve Yönetişim](/info/adoption-governance.html#status) sayfası bunun pratikte nasıl test edildiğini anlatır.

## Panorama

| Özellik | Canva (Açık kanvas) | Marka portalları (DAM şablonlama) | Illustrator (Masaüstü profesyonel) | Figma / Penpot (Çevrimiçi profesyonel) | **Lolly (Kısıtlama öncelikli)** |
|---|---|---|---|---|---|
| Toplu içerik üretimi | kısmen | ✗ | ✗ | ✗ | **✓** |
| Tamamen çevrimdışı çalışır | ✗ | ✗ | ✓ | kısmen | **✓** |
| Şablon mantığı ve katı kısıtlamalar | ✗ | kısmen | ✗ | kısmen | **✓** |
| Tasarım becerisi gerektirmez | kısmen | ✓ | ✗ | ✗ | **✓** |
| Otomatik Content Credentials | ✗ | ✗ | kısmen | ✗ | **✓** |
| Araçlar diğer araçları birleştirir | ✗ | ✗ | ✗ | ✗ | **✓** |
| Açık motor, SaaS'a kilitli değil | ✗ | ✗ | ✗ | kısmen | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| İsteğe bağlı, adli düzeyde köken kaydı | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobil ve Masaüstü Uygulamaları | ✓ | ✗ | ✗ | kısmen | **✓** |
| Komut Satırı ve TUI | ✗ | ✗ | ✗ | ✗ | **✓** |


Boşluğun şekli açık: mevcut ortamda hiçbir şey bize kısıtlama öncelikli, çevrimdışı çalışabilen, düşük beceri gerektiren, kurum içi erişilebilir, üretken bir çıktı sunmuyor. Lolly artık kendi açık kanvasını sunuyor - doğrudan manipülasyona dayalı serbest bir kanvas olan **Layout Studio** - ama Canva sütunundan belirleyici bir farkla: üzerine yerleştirilen renkler, tipografi ve varlıklar marka global ayarlarına uyar, böylece serbest yerleşim bile kısıtlama öncelikli kalır. Lolly'nin hâlâ **olmadığı** şey, kısıtlamasız bir tasarım paketidir; tasarımcılar özel işler için Illustrator ve Figma kullanmaya devam edecek - ve bu iş yönetilen, yeniden üretilebilir bir varlığa dönüşmesi gerektiğinde, Layout Studio'nun [Bir tasarım içe aktar](/info/design-import.html) özelliği tamamlanmış Figma/Illustrator/Penpot dosyasını kanvasa düzenlenebilir, markaya uygun kutular olarak getirir.

## Şunlar için kullan

- Operasyonel hale getirilmiş yaratıcı varlıkların hızlı üretimi (etkinlik kartları, rozetler, imzalar, uyarılar)
- Parçaların - renkler, tipografi, simgeler, görseller - marka global ayarlarına uygun kalması gerektiğinde açık kanvasta (Layout Studio) serbest biçimli yerleşim
- Tamamlanmış bir Figma, Illustrator, InDesign veya Penpot tasarımını (Layout Studio'nun Bir tasarım içe aktar özelliğiyle) kanvasa taşıyarak düzenlenebilir, yönetilebilir ve her Lolly biçiminde deterministik şekilde yeniden oluşturulabilir hale getirmek
- "Üç alanı doldur, bitmiş varlığı al" tarzında bir-çoğa akışlar - `/pro` toplu iş ızgarasında bir e-tablo/CSV'den toplu çalıştırmalar dahil (satırları yapıştır veya içe aktar, her satır için bir bitmiş varlık, zip olarak indir)
- Her zaman açık, tekrarlayan markalı çıktılar
- Marka ifadesinin merkezi kontrolünün ifade özgürlüğünden daha önemli olduğu durumlar

## Şunlar için kullanma

- Özel yapım veya amiral gemisi hero içerikler (billboardlar, büyük videolar)
- Gerçekten bir tasarımcı gerektiren benzersiz kampanya işleri
- Marka sisteminden tamamen kaçması gereken fikir üretimi - Lolly'nin açık kanvası renkleri, tipografiyi ve varlıkları yine de marka global ayarlarına uydurur, ve mesele de tam olarak bu

## Benzersiz şekilde sunduğu şeyler

- **Bağlam içinde güvenle sunulan vahşi tasarım potansiyeli.** Araçlar, sabit kodlanmış korkuluklar içinde maceracı tasarım fikirlerini ifade edebilir.
- **Nihai varlığı döndüren yazılım tanımlı içerik otomasyonu.** Girdi → nihai dosya. "Şimdi bunu tasarım aracından kaydet ve son işlemden geçir" yok.
- **Araçlar araçları birleştirir.** Bir araç, başka bir aracın render çıktısını kendi içine gömüp tek bir bitmiş varlığın parçası olarak döndürebilir; araçlar arasında hiçbir kod bağımlılığı olmadan - ortamdaki hiçbir açık kanvas veya DAM şablonlama ürününün sunmadığı temel bir yapı taşı.
- **Tedarikçi tarafsızlığı.** Tam özellik ve maliyet kontrolü. Açık kaynaklı motor. Araçlar ve varlıklar git ile izlenen içeriktir, bir SaaS veritabanına kilitlenmemiştir.
