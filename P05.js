//Array içerisinde data barındıran bir dizidir
let meyveler=['elma','muz','kayısı','kavun']

console.log(meyveler)
console.log(meyveler[3])

//push metodu: array sonuna yeni eleman ekliyor
meyveler.push('portakal')

console.log(meyveler)

// pop metodu: dizinin sonundaki öğeyi kaldırıp console içine yazılırsa kaldırdığı öğeyi yazdırır

console.log(meyveler.pop());

console.log(meyveler)

//shift(): dizinin başındaki elemanı kaldırır. console içine yazılırsa kaldırdığı elemanı yazdırır

console.log(meyveler.shift());
console.log(meyveler)
  //unshift(): dizinin başına eleman ekler

meyveler.unshift('üzüm');
console.log(meyveler)  


// splice():
meyveler.splice(0,1,'avakado','kiraz')
console.log(meyveler)

var arabalar=['Renault','Tofaş','Opel']

console.log(meyveler.concat(arabalar));