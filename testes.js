const listaQ = [];

for (let i = 0; i < 5; i++) {
    const lista = new Array(5).fill(0).map(() => 5);
    listaQ.push(lista);
}

console.log(listaQ);