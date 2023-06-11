let tabla = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
let tablaHtml = document.getElementsByClassName("valorCuadrado");

let timeId;


document.addEventListener('keydown', function (event) {
    clearInterval(timeId)
        if (event.code === 'ArrowDown') {
            abajo(tabla);
        } else if (event.code === 'ArrowRight') {
            derecha(tabla);
        } else if (event.code === "ArrowLeft") {
            izquierda(tabla);
        } else if (event.code === "ArrowUp") {
            arriba(tabla);
        }

});


function asignarTabla(tabla, tablaH) {
    let cont = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            tabla[i][j] = tablaH[cont];
            cont++;
        }
    }
}
function comenzar(tabla) {
    let fila = 0;
    let columna = 0;

    for (let i = 0; i < 2; i++) {
        fila = Math.floor(Math.random() * 4);
        columna = Math.floor(Math.random() * 4);
        tabla[fila][columna].innerHTML = "2";
    }

}
function spawnear(tabla) {
    let fila = Math.floor(Math.random() * 4);
    let col = Math.floor(Math.random() * 4);
    if (tabla[fila][col].innerHTML === "") {
        tabla[fila][col].innerHTML = "2";
    } else {
        spawnear(tabla);
    }
}



function abajo(tabla) {
    let contMovimientos = 0;
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 4; j++) {
            if (tabla[i][j].innerHTML == tabla[i + 1][j].innerHTML && tabla[i][j].innerHTML != "") {
                tabla[i + 1][j].innerHTML = parseInt(tabla[i][j].innerHTML) + parseInt(tabla[i + 1][j].innerHTML);
                tabla[i][j].innerHTML = "";
                contMovimientos++;

            } else if (tabla[i][j].innerHTML != "" && tabla[i + 1][j].innerHTML == "") {
                tabla[i + 1][j].innerHTML = tabla[i][j].innerHTML;
                tabla[i][j].innerHTML = "";
                contMovimientos++;
            }
        }
    }
    if (contMovimientos != 0) spawnear(tabla);
}





function izquierda(tabla) {
    let contMovimientos = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {

            if (tabla[i][j].innerHTML == tabla[i][j - 1].innerHTML && tabla[i][j].innerHTML != "" && tabla[i][j] != "" &&tabla[i][j-1] !="") {
                    tabla[i][j - 1].innerHTML = parseInt(tabla[i][j].innerHTML) + parseInt(tabla[i][j - 1].innerHTML);
                        tabla[i][j].innerHTML = "";
                        movimientoSuma = true;
                        contMovimientos++;
    
                    break;
            } else if (tabla[i][j].innerHTML != "" && tabla[i][j - 1].innerHTML == "") {
                tabla[i][j - 1].innerHTML = tabla[i][j].innerHTML;
                tabla[i][j].innerHTML = "";
                contMovimientos++;
            }
        }
    }
    if (contMovimientos != 0) spawnear(tabla);

}
function derecha(tabla) {
    let contMovimientos = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {

            if (tabla[i][j].innerHTML == tabla[i][j + 1].innerHTML && tabla[i][j].innerHTML != "") {
                setTimeout(() => {
                    console.log(tabla[i][j])
                    tabla[i][j + 1].innerHTML = parseInt(tabla[i][j].innerHTML) + parseInt(tabla[i][j + 1].innerHTML);
                    tabla[i][j].innerHTML = "";
                    contMovimientos++;

                }, 1000)

            } else if (tabla[i][j].innerHTML != "" && tabla[i][j + 1].innerHTML == "") {
                tabla[i][j + 1].innerHTML = tabla[i][j].innerHTML;
                tabla[i][j].innerHTML = "";
                contMovimientos++;
            }
        }
    }
    if (contMovimientos != 0) spawnear(tabla);
}
function arriba(tabla) {
    let contMovimientos = 0;
    for (let i = 3; i > 0; i--) {
        for (let j = 0; j < 4; j++) {
            if (tabla[i][j].innerHTML == tabla[i - 1][j].innerHTML && tabla[i][j].innerHTML != "") {
                tabla[i - 1][j].innerHTML = parseInt(tabla[i][j].innerHTML) + parseInt(tabla[i - 1][j].innerHTML);
                tabla[i][j].innerHTML = "";
                contMovimientos++;
            } else if (tabla[i][j].innerHTML != "" && tabla[i - 1][j].innerHTML == "") {
                tabla[i - 1][j].innerHTML = tabla[i][j].innerHTML;
                tabla[i][j].innerHTML = "";
                contMovimientos++;
            }
        }
    }
    if (contMovimientos != 0) spawnear(tabla);

}
asignarTabla(tabla, tablaHtml);
comenzar(tabla)

