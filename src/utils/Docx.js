import {
    Document,
    Packer,
    AlignmentType,
    Paragraph,
    TextRun,
    HeadingLevel
  } from "docx";
  import saveAs from "file-saver";
  
  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
  // This simple example will only contain one section
  
  var currency_symbol = "₺";
  var formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY"
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  let data = {
    tazminatRapor: {
      id: "",
      raporBilgileri: {
        id: 2,
        davaliAdi: "Ahmet Yılmaz",
        davaciAdi: "Mehmet Alkın",
        davaciVekili: "Av. Mahmut",
        bilirkisi: "Bilirkişi Ahmet",
        raporunDuzenlenecegiMakam: "Ankara Asliye Ceza Mahkemesi",
        esasNo: "2022/12"
      },
      ucretBilgileri: {
        id: 2,
        gunlukCiplakYevmiye: 55.0,
        gunlukIkramiye: 20.0,
        gunlukServis: 10.0,
        gunlukYemek: 10.0,
        gunlukYakacak: 20.0,
        gunlukDigerHaklar: 5.0
      },
      tarihBilgileri: {
        id: 2,
        raporTarihi: "2020-06-21",
        davaTarihi: "2018-10-21",
        kazaliDogumTarihi: "1978-01-11",
        kazaTarihi: "2010-05-10",
        ucretTarihi: "2017-10-11",
        istirahatBitisTarihi: "2018-10-21"
      },
      ekBilgiler: {
        id: 2,
        davaliKusurOrani: 0.75,
        maluliyetOrani: 1.0,
        sgkAyligiPesinDegeri: 10.0,
        geciciIsGoremezlikTutari: 10.0,
        maddiTazminatIstek: 10.0,
        kazaliCinsiyet: true,
        kazalininCocukSayisi: 3,
        kazalininMedeniHali: true,
        kazalininEsiCalisiyor: false
      }
    },
    gecmisDevreHesabi: {
      id: 1,
      kazaTarihiRaporYiliSonu: "Yıl: 10 Ay: 7 Gün: 21",
      istirahatliDonemZarari: 4738.499,
      istirahatSonrasiZarari: [
        {
          id: "",
          tazminatMiktar: "",
          aciklama: ""
        }
      ],
      gecmisDevreZarari: 0
    },
    gelecekDevreHesabi: {
      id: "",
      aktifDevreToplami: "",
      zararDonemleri: [
        {
          id: "",
          donemBaslangicTarihi: "",
          donemBitisTarihi: "",
          donemZarar: ""
        }
      ]
    },
    pasifDevreHesabi: {
      id: 1,
      sonCalismaTarihi: "2038-01-11",
      bakiyeOmruTarihi: "2047-01-11",
      brutZarar: null,
      bugunkuZarar: 322454.7
    }
  };
  
  function createDoc(props) {
    data = props;
    console.log(data);
  
    let textRunArray = [];
    data.gecmisDevreHesabi.istirahatSonrasiZarari.forEach((e) => {
      textRunArray.push(
        new TextRun({
          text: `${e.aciklama}${formatter
            .format(e.tazminatMiktar)
            .replace(currency_symbol, "")} TL`,
          break: 1
        })
      );
    });
  
    let gelecekDevreTextRun = [];
    data.gelecekDevreHesabi.zararDonemleri.forEach((e) => {
      gelecekDevreTextRun.push(
        new TextRun({
          text: `Dönem Başlangıcı: ${new Date(
            e.donemBaslangicTarihi
          ).toLocaleDateString("tr-TR")} Dönem Bitişi: ${new Date(
            e.donemBitisTarihi
          ).toLocaleDateString("tr-TR")} Zarar = ${formatter
            .format(e.donemZarar)
            .replace(currency_symbol, "")} TL`,
          break: 1
        })
      );
    });
  
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "BİLİRKİŞİ RAPORU",
                  heading: HeadingLevel.HEADING_1,
                  bold: true,
                  size: 26
                }),
                new TextRun({
                  text: `${data.tazminatRapor.raporBilgileri.raporunDuzenlenecegiMakam
                    .toUpperCase()
                    .toString()}`,
                  break: 1,
                  size: 24
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Esas No     :",
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `${data.tazminatRapor.raporBilgileri.esasNo}`
                }),
                new TextRun({
                  text: "Davacı     :",
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `${data.tazminatRapor.raporBilgileri.davaciAdi}`
                }),
                new TextRun({
                  text: "Davalı     :",
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `${data.tazminatRapor.raporBilgileri.davaliAdi}`
                }),
                new TextRun({
                  text: "Davacı Vekili     :",
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `${data.tazminatRapor.raporBilgileri.davaciVekili}`
                }),
                new TextRun({
                  text: "Davalı Vekili     :",
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `${data.tazminatRapor.raporBilgileri.davaliAdi}`
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Yukarıda dosya adı bulunan davada resen bilirkişi seçilmiş olmam nedeniyle raporumu aşağıda olduğu üzere Yüksek Mahkeme'nin takdirlerine arz ederim.`
                }),
                new TextRun({
                  text: "İnceleme: ",
                  bold: true,
                  break: 2
                }),
                new TextRun({
                  text: `Davacı vekili ${data.tazminatRapor.tarihBilgileri.davaTarihi} tarihli dava dilekçesinde iş kazası neticesi malul kalan müvekkiline ödenmesi gereken ${data.tazminatRapor.ekBilgiler.maddiTazminatIstek} TL maddi ve manevi tazminatının davalıdan tahsilini talep ve dava etmiştir. Davalı vekili cevap ihtiyasında belirttiği nedenlerle davanın reddini istemiştir. Deliller toplanmış, yazılı belgeler celp edilmiştir. Maddi tazminat hesabına esas olan unsurlar aşağıda olduğu üzere belirlenmiştir. `
                }),
                new TextRun({
                  text: "Toplanan delillerden;",
                  bold: true,
                  break: 2
                }),
                new TextRun({
                  text: "a.)Kaza Tarihi: ",
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: ` ${data.tazminatRapor.tarihBilgileri.kazaTarihi}`
                }),
                new TextRun({
                  text: "b.)Davalı Kusuru: ",
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `%${data.tazminatRapor.ekBilgiler.davaliKusurOrani * 100}`
                }),
                new TextRun({ text: "c.)Ücret: ", bold: true, break: 1 }),
                new TextRun({
                  text: `Günlük net çıplak yevmiye ${
                    data.tazminatRapor.ucretBilgileri.gunlukCiplakYevmiye
                  } TL, Günlük İkramiye: ${
                    data.tazminatRapor.ucretBilgileri.gunlukIkramiye
                  } TL, Günlük Servis: ${
                    data.tazminatRapor.ucretBilgileri.gunlukServis
                  } TL, Günlük Yemek: ${
                    data.tazminatRapor.ucretBilgileri.gunlukYemek
                  } TL, Günlük Yakacak: ${
                    data.tazminatRapor.ucretBilgileri.gunlukYakacak
                  } TL, Günlük Diğer Haklar: ${
                    data.tazminatRapor.ucretBilgileri.gunlukDigerHaklar
                  }TL eklendiğinde günlük giydirilmiş ücret ${
                    data.tazminatRapor.ucretBilgileri.gunlukCiplakYevmiye +
                    data.tazminatRapor.ucretBilgileri.gunlukDigerHaklar +
                    data.tazminatRapor.ucretBilgileri.gunlukIkramiye +
                    data.tazminatRapor.ucretBilgileri.gunlukServis +
                    data.tazminatRapor.ucretBilgileri.gunlukYakacak +
                    data.tazminatRapor.ucretBilgileri.gunlukYemek
                  } olarak hesaplanmıştır.  `
                }),
                new TextRun({ text: "d.)Maluliyet: ", bold: true, break: 1 }),
                new TextRun({
                  text: `%${data.tazminatRapor.ekBilgiler.maluliyetOrani * 100}`
                }),
                new TextRun({ text: "e.)Zarar Süresi: ", bold: true, break: 1 }),
                new TextRun({
                  text: `Davalı bugün ${data.tazminatRapor.tarihBilgileri.kazaliDogumTarihi}, kaza tarihinde 40 yaşında olup bugün 42 yaşında olduğundan Yargıtay kararı gereği 60 yaşına kadar çalışabileceğinden aktif devre hesaplaması ${data.pasifDevreHesabi.sonCalismaTarihi} tarihine kadar yapılacaktır. `
                }),
                new TextRun({ text: "f.)Hesap Şekli: ", bold: true, break: 1 }),
                new TextRun({
                  text: `Davacının kazaya uğradığı tarih ile rapor tarihi arasında, bilinen ücretlere göre geçmiş devre hesabı yapılacaktır. Rapor tarihinden Yargıtay kararları gereği faal çalışacağı kabul edilen 60 yaşa kadar da aktif devre hesaplaması yapılacaktır. Kaza tarihi itibariyle kalan bakiye ömür PMF yaşam tablosuna göre 29 yıl 8 ay 22 gün olduğundan geçmiş ve aktif devre hesabından sonra geriye kalan ${data.pasifDevreHesabi.bakiyeOmruTarihi} pasif devre hesabı yapılacaktır. Hesaplamada geçmiş ve aktif devre hesabında net ücrete AGİ (Asgari Geçim İndirimi) ve sosyal yardımlar eklenecek, pasif devre hesabında ise sadece net asgari ücret üzerinden yapılacaktır.`
                })
              ],
              break: 1
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Geçmiş Devre Hesabı",
                  heading: HeadingLevel.HEADING_2,
                  bold: true,
                  break: 2
                }),
                new TextRun({
                  text: "Kaza tarihinden rapor yılı sonuna kadar hesaplama",
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `${data.tazminatRapor.tarihBilgileri.kazaTarihi} - ${data.tazminatRapor.tarihBilgileri.raporTarihi} (${data.gecmisDevreHesabi.kazaTarihiRaporYiliSonu}) `,
                  break: 1
                }),
                new TextRun({
                  text: "İstirahatli Dönem Hesabı",
                  bold: true,
                  break: 2
                }),
                new TextRun({
                  text: `Kaza tarihinden ${
                    data.tazminatRapor.tarihBilgileri.istirahatBitisTarihi
                  } tarihine kadar istirahatli olan davacının raporlu olduğu bu dönemde % ${
                    data.tazminatRapor.ekBilgiler.maluliyetOrani
                  } oranında malul kaldığı belirlenmiştir. İstirahatli süre kaza tarihindeki günlük net asgari ücret hesaplandığında istirahatli olunan süre zararı ${formatter
                    .format(data.gecmisDevreHesabi.istirahatliDonemZarari)
                    .replace(currency_symbol, "")} TL'dir. `,
                  break: 1
                }),
                new TextRun({
                  text: "İstirahat Sonrası Zararı",
                  bold: true,
                  break: 2
                })
              ]
            }),
            new Paragraph({
              children: textRunArray
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Kazalının ${
                    data.tazminatRapor.tarihBilgileri.ucretTarihi
                  } tarihli bilinen son yevmiyesi ${
                    data.tazminatRapor.ucretBilgileri.gunlukCiplakYevmiye
                  } TL'dir. O tarihte geçerli günlük net asgari ücretin 1,97 katıdır. AGİ toplamı ile %${
                    data.tazminatRapor.ekBilgiler.davaliKusurOrani * 100
                  } kusur oranı ve %${
                    data.tazminatRapor.ekBilgiler.maluliyetOrani * 100
                  } maluliyet oranı nazara alındığında;`
                }),
                new TextRun({
                  text: `Geçmiş devre zararı ${formatter
                    .format(data.gecmisDevreHesabi.gecmisDevreZarari)
                    .replace(currency_symbol, "")} TL olarak hesaplanır.`,
                  break: 1
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Gelecek Devre Hesabı`,
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `Rapor yılından aktif çalışma yaşı sonuna kadar `,
                  break: 1
                }),
                new TextRun({
                  text: `( ${data.tazminatRapor.tarihBilgileri.raporTarihi}-${data.pasifDevreHesabi.sonCalismaTarihi} )`
                }),
                new TextRun({
                  text: `Kazalının ${data.tazminatRapor.tarihBilgileri.ucretTarihi} tarihli bilinen son yevmiyesi, o tarihte bilinen günlük net asgari ücretin 1,97 katıdır. Aşağıda son aktif çalışma tarihine kadar zarar dönemleri verilmiştir:`,
                  break: 1
                }),
                new TextRun({
                  text: `Gelecek Aktif Devre olan ${
                    data.pasifDevreHesabi.sonCalismaTarihi
                  } için peşin gelir toplamı ${
                    data.gelecekDevreHesabi.aktifDevreToplami
                  } TL, %${
                    data.tazminatRapor.ekBilgiler.davaliKusurOrani * 100
                  } kusur oranı ve %${
                    data.tazminatRapor.ekBilgiler.maluliyetOrani * 100
                  } maluliyet oranı nazara alındığında;`,
                  break: 1
                })
              ]
            }),
            new Paragraph({
              children: gelecekDevreTextRun,
              alignment: AlignmentType.JUSTIFIED
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${formatter
                    .format(data.gelecekDevreHesabi.aktifDevreToplami)
                    .replace(currency_symbol, "")} TL x %${
                    data.tazminatRapor.ekBilgiler.maluliyetOrani * 100
                  } x %${
                    data.tazminatRapor.ekBilgiler.davaliKusurOrani * 100
                  } = ${formatter
                    .format(
                      data.gelecekDevreHesabi.aktifDevreToplami *
                        data.tazminatRapor.ekBilgiler.maluliyetOrani *
                        data.tazminatRapor.ekBilgiler.davaliKusurOrani
                    )
                    .replace(currency_symbol, "")} TL olarak hesaplanmıştır.`,
                  break: 2
                }),
                new TextRun({
                  text: `Pasif (Emekli) Devre Hesabı`,
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `Rapor yılı sonu itibariyle (Net Asgari Ücret x 365 gün x %${
                    data.tazminatRapor.ekBilgiler.davaliKusurOrani * 100
                  } kusur x %${
                    data.tazminatRapor.ekBilgiler.maluliyetOrani * 100
                  } maluliyet) hesaplaması sonucu günlük emekli geliri bakiye ömrü sonuna kadar alacağı miktar:`,
                  break: 1
                }),
                new TextRun({
                  text: `${formatter
                    .format(data.pasifDevreHesabi.bugunkuZarar)
                    .replace(currency_symbol, "")} TL olarak hesaplanmıştır`,
                  break: 2
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Zarar Hesap Tablosu`,
                  bold: true,
                  break: 1
                }),
                new TextRun({
                  text: `Dönem: ${new Date(
                    data.tazminatRapor.tarihBilgileri.raporTarihi
                  ).toLocaleDateString("tr-TR")} - ${new Date(
                    new Date(
                      data.gelecekDevreHesabi.zararDonemleri.at(
                        0
                      ).donemBaslangicTarihi
                    )
                  ).toLocaleDateString(
                    "tr-TR"
                  )} Geçmiş Devre Zararı ${formatter
                    .format(data.gecmisDevreHesabi.gecmisDevreZarari)
                    .replace(currency_symbol, "")} TL`,
                  break: 1
                }),
                new TextRun({
                  text: `Dönem: ${new Date(
                    data.gelecekDevreHesabi.zararDonemleri.at(
                      0
                    ).donemBaslangicTarihi
                  ).toLocaleDateString("tr-TR")} - ${new Date(
                    data.gelecekDevreHesabi.zararDonemleri.pop().donemBitisTarihi
                  ).toLocaleDateString(
                    "tr-TR"
                  )} Gelecek Devre Zararı ${formatter
                    .format(data.gelecekDevreHesabi.aktifDevreToplami)
                    .replace(currency_symbol, "")} TL`,
                  break: 1
                }),
                new TextRun({
                  text: `Dönem: ${new Date(
                    data.pasifDevreHesabi.sonCalismaTarihi
                  ).toLocaleDateString("tr-TR")} - ${new Date(
                    data.pasifDevreHesabi.bakiyeOmruTarihi
                  ).toLocaleDateString(
                    "tr-TR"
                  )} Pasif Devre Zararı ${formatter
                    .format(data.pasifDevreHesabi.bugunkuZarar)
                    .replace(currency_symbol, "")} TL`,
                  break: 1
                }),
                new TextRun({
                  text: `Toplam: ${formatter
                    .format(
                      data.gecmisDevreHesabi.gecmisDevreZarari +
                        data.gelecekDevreHesabi.aktifDevreToplami +
                        data.pasifDevreHesabi.bugunkuZarar
                    )
                    .replace(currency_symbol, "")} TL`,
                  break: 1
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "NETİCE: ",
                  bold: true,
                  break: 2
                }),
                new TextRun({
                  text: `Yukarıda arz ve izah ettiğimiz üzere davacıya ödenecek maddi tazminatın ${formatter
                    .format(
                      data.gecmisDevreHesabi.gecmisDevreZarari +
                        data.gelecekDevreHesabi.aktifDevreToplami +
                        data.pasifDevreHesabi.bugunkuZarar
                    )
                    .replace(
                      currency_symbol,
                      ""
                    )} TL olarak hesaplandığına ve istek miktarının ${formatter
                    .format(data.tazminatRapor.ekBilgiler.maddiTazminatIstek)
                    .replace(
                      currency_symbol,
                      ""
                    )} TL olduğuna dair tarafımdan 3 nüsha olarak tanzim edilmiş iş bu rapor Yüksek Mahkeme'nin takdirlerine saygıyla arz olunur.`
                }),
                new TextRun({
                  text: `${new Date().toLocaleDateString("tr-TR")}`,
                  break: 1
                })
              ]
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              break: 2,
              children: [
                new TextRun({
                  text: "BİLİRKİŞİ",
                  bold: true
                }),
                new TextRun({
                  text: `${data.tazminatRapor.raporBilgileri.bilirkisi}`,
                  break: 1
                })
              ]
            })
          ]
        }
      ]
    });
  
    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "bilirkisirapor.docx");
    });
  }
  
  // Used to export the file into a .docx file
  // Packer.toBuffer(doc).then((buffer) => {
  // fs.writeFileSync("My Document.docx", buffer);
  // });
  
  export { createDoc };
  