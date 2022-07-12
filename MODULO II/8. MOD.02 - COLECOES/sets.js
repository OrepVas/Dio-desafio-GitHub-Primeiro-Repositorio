const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5, 2077, 3185];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));