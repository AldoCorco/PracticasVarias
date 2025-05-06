var Meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre","Octubre","Noviembre", "Diciembre"];

var MesesA = Array.from(Meses);

console.log(Meses[5]);
console.log(Meses[11]);


Meses.unshift("Primero es:");
Meses.push("El ultimo es:");

console.log(Meses);

Meses.reverse();
console.log(Meses);

console.log(Meses.join("-"));

console.log(MesesA.slice(4,11));
 



