// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyveler = ["Elma", "Armut", "Muz", "Çilek"]

// 2- Dizi kaç elemanlıdır?

sonuc1 = meyveler.length;

console.log(sonuc1);

// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]); //elma
console.log(meyveler[meyveler.length - 1]); //çilek

// 4- Elma dizinin bir elemanımıdır?

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

sonuc2 = meyveler.concat("Kiraz");
console.log(sonuc2);

// 6- Dizinin son 2 elemanını siliniz.
sonuc3 = meyveler.pop(2);
console.log(sonuc3);
console.log(meyveler);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet  2009 (60,60,70)
    */
let ogr1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [70,60,80]
]    

let ogr2 = [
    "Ada",
    "Bilgi",
    2012,
    [80,80,90]
]

let ogr3 = [
    "Ahmet", 
    2009, 
    [60, 60, 70]
];

let ogrenciler = [ogr1, ogr2, ogr3]

let yigit_yas = new Date().getFullYear()- ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][1];

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) /3;

let ada_not =(ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;

let ahmet_not =(ogrenciler[2][2][0] + ogrenciler[2][2][1] + ogrenciler[2][2][2]) / 3;



console.log(yigit_yas, ada_yas, ahmet_yas);
console.log(yigit_not, ada_not, ahmet_not);








