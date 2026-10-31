// Dadas tres calificaciones calcula el promedio.
(function () {
  'use strict';

  let notas = [7, 5, 4];

  let promedio =
    notas.reduce((a, c) => a + c, 0) / notas.length;

  console.log(promedio);


  function reducir(array, callback, initialValue) {
    let acumulado = initialValue
    for (let i = 0; i < array.length; i++) {
      acumulado = callback(acumulado, array[i]);
    }
  }

  console.log(reducir(notas, (a, c) => a + c, 0) / notas.length );

  let sumaCuadros = notas.reduce((a, c))
})();


(function () {
  'use strict';

  // Ejercicio 1: promedio de tres calificaciones
  let notas = [7, 5, 4];

  let promedio =
    notas.reduce((a, c) => a + c, 0) / notas.length;

  console.log(promedio); // 5.333333333333333

  // Ejercicio 2: reduce hecho a mano
  function reducir(array, callback, initialValue) {
    let acumulado = initialValue;
    for (let i = 0; i < array.length; i++) {
      acumulado = callback(acumulado, array[i]);
    }
    return acumulado;
  }

  console.log(reducir(notas, (a, c) => a + c, 0)); // 16

  // Ejercicio 3: tabla de multiplicar
  function tablaDeMultiplicar(numero) {
    let resultado = [];
    for (let i = 1; i <= 10; i++) {
      resultado.push(numero * i);
    }
    return resultado;
  }

  console.log(tablaDeMultiplicar(1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Mostrar la tabla en la página
  let inputNumero = document.getElementById('numero');
  let boton = document.getElementById('calcular');
  let salida = document.getElementById('resultado');

  boton.addEventListener('click', function () {
    let numero = Number(inputNumero.value);
    salida.textContent = '[' + tablaDeMultiplicar(numero).join(', ') + ']';
  });

})();