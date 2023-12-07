const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const arrayInvertido = frutas.reverse().join(", ");

console.log(arrayInvertido);

frutas.shift();
frutas.pop();
frutas.push("Melão");

console.log(frutas);

