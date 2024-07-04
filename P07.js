//Koşullu ifadeler

let sayi=12;

if(sayi%2===0){
    console.log('sayı çifttir')
}else if(sayi===12){
    console.log('sayı 12dir')
}else{
    console.log('sayı tektir')
}

let x=13
let y=27
if(x%2===0 && y%2===0){
    console.log('Her iki sayı da çifttir')
}else if(x%2===0 || y%2===0){
    console.log('Sayılardan en az birisi çifttir')
}else{
    console.log('Sayılardan hiçbiri çift değildir')
}