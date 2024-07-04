//Javascriptte 3 adet değişken türü bulunur
// let  - var - const olmak üzere
// const atandıktan sonra değiştirilemez. Sabiti ifade eder örn pi sayısı

/*
javascriptte temelde 5 adet data tipi vardır
Bu data tipleri String, Number, Booleav, Null ve Undefined
Değişken oluştururken data tipini belirtmeye gerek yoktur

*/

//String Data tipi
let isim='Murat';
var soyisim='Babayiğit';
console.log(isim+' '+soyisim)

console.log('  ----  ')
//Number data tipi
let yas=45;
var klo=76.2;

console.log('Yas:'+yas+'\nKilo:'+klo)
var sayi=4.8;
console.log(sayi+klo)
// console.log(sayi2+klo)

const pi=3;
console.log(pi)
// pi=3.14;  const olarak tanımlanan değişkene tekrar atama yapılamaz
console.log(pi)


//Boolean data tipi
const isHappy=true;
let isLearn=true;
var isLazy=false;

console.log(isHappy);
// isHappy=false;

//Null ve undefined data tipi
let firstname='Rana';
var lastname='Ülker';
var Itsalary=null;
let yearOfRetired=undefined;

console.log('Çalışan Bilgileri:\n\t'+'Firstname: '+firstname+'\n\tLastname:'+lastname+'\n\tIt Salary:'+Itsalary+'\n\tYear of Retired: '+yearOfRetired);
Itsalary=3200;

console.log('Çalışan Bilgileri:\n\t'+'Firstname: '+firstname+'\n\tLastname:'+lastname+'\n\tIt Salary:'+Itsalary+'\n\tYear of Retired: '+yearOfRetired);


console.log(typeof firstname)//typeof komutu bize datanın türünü verir
let zam=100;
var zammiktari=String(zam); //Data casting işlemi ile number bir datayı string olarak tanımladık
console.log(typeof zam) //  number
console.log(typeof zammiktari) // string