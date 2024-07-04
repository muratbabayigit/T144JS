//Opertöreler

let x=235;
let y=13;


console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

console.log('--------------------')
console.log(x==y); //false
console.log(x!=y); // true
console.log(x>y); //true
console.log(x<y);//false
console.log(x<=y);//false
console.log(x>=y);//true


let sayi1=100;
let sayi2=String(100)

console.log(sayi1==sayi2);// true == op. sadece değere bakar türü ile ilgilnemez
console.log(sayi1===sayi2); //false === op. degerin aynı olması yetmez tür aynı değilse false verir


let a=10;

console.log(a);//10

a+=4 
console.log(a);//14
a-=5;
console.log(a);//9
a+=1
a*=3;
console.log(a);//27
a-=200;
console.log(a); //-173
a/=-2;
console.log(a);
a%=6;
console.log(a);