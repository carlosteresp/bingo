var numerosBase = [];
var numeros = [];
var numerosMencionados = [];

var cartones = [];

function llenarNumeros() {
    for (let i = 1; i <= 75; i++) {
        numeros.push(i)
        numerosBase.push(i)
    }
    return numeros;
}

function elegirNumero() {
    numeros = numeros.sort(function () {
        return Math.random() - 0.5
    });
    let elegido = null
    if (numeros.length > 0) {
        elegido = numeros.pop();
        numerosMencionados.push(elegido)
    }
    return elegido;
}

function generarCarton() {
    let carton = [
        [],[],[],[],[]
    ];

    for (let i = 0; i < 5; i++) {
        numerosBaseSeccion = numerosBase.slice(i * 15, i * 15 + 15)
        numerosBaseSeccion = numerosBaseSeccion.sort(function () {
            return Math.random() - 0.5
        });
        numerosBaseSeccion = numerosBaseSeccion.slice(0, 5)
        for (let fila = 0; fila < 5; fila++) {
            let num = numerosBaseSeccion.pop();
            carton[i][fila] = num;
        }
    }
    carton[2][2] = null;

    //invertir
    let cartoni = [
        [],[],[],[],[]
    ];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            cartoni[i][j] = carton[j][i];
        }
    }

    cartones.push(cartoni);

    return cartoni;
}

function comprobarCarton(carton = []){
    return false;
}

function comprobarCartones() {

    let eval = cartones.map((c)=>{
        return comprobarCarton(c)
    })

    return eval;
}

//ejecucion
llenarNumeros();

console.log('GenerarCarton', generarCarton())

while (numeros.length) {
    console.log("Numero elegido", elegirNumero())

    comprobarCartones()
}