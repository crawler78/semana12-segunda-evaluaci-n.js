// =====================================================================
// EJERCICIOS DE ARREGLOS Y FUNCIONES EN JAVASCRIPT
// Abre la consola del navegador (tecla F12 -> pestaña "Console")
// para ver todos los resultados.
// =====================================================================


// ---------------------------------------------------------------------
// 1. Crear una funcion que tome como parametro un arreglo,
//    retornar el ultimo elemento del arreglo.
//    Entrada: [4, 8, 5, 3]  ->  Salida: 3
// ---------------------------------------------------------------------
function ultimoElemento(arreglo) {
  // El ultimo indice siempre es la longitud menos 1
  return arreglo[arreglo.length - 1];
}

console.log('--- Ejercicio 1 ---');
console.log(ultimoElemento([4, 8, 5, 3])); // 3


// ---------------------------------------------------------------------
// 2. Crear una funcion que tome como parametro un arreglo y un numero,
//    retornar un nuevo arreglo con todos los elementos y el numero
//    agregado al final (usar el operador spread).
//    Entrada: [2, 7, 5, 11] y 9  ->  Salida: [2, 7, 5, 11, 9]
// ---------------------------------------------------------------------
function agregarNumero(arreglo, numero) {
  // ...arreglo copia todos los elementos y luego agregamos el numero
  return [...arreglo, numero];
}

console.log('--- Ejercicio 2 ---');
console.log(agregarNumero([2, 7, 5, 11], 9)); // [2, 7, 5, 11, 9]


// ---------------------------------------------------------------------
// 3. Crear una funcion que tome como parametro un arreglo de numeros,
//    retornar el promedio de todos los elementos del arreglo.
//    Entrada: [2, 6, 1, 8]  ->  Salida (Promedio): 4.25
// ---------------------------------------------------------------------
function promedioTotal(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    // Vamos acumulando cada elemento en la variable suma
    suma = suma + arreglo[i];
  }

  // promedio = (suma de todos los elementos) / (numero de elementos)
  let promedio = suma / arreglo.length;

  return promedio;
}

console.log('--- Ejercicio 3 ---');
console.log(promedioTotal([2, 6, 1, 8]));                     // 4.25
console.log(promedioTotal([2, 6, 1, 8, 7]));                  // 4.8
console.log(promedioTotal([2, 6, 1, 8, 7, 12, 58, 63, 1, 8])); // 16.6


// ---------------------------------------------------------------------
// 4. Crear una funcion que tome como parametro un arreglo de numeros,
//    retornar un numero con la suma de todos los numeros pares.
//    Entrada: [1, 2, 5, 8, 9, 12, 2, 3]  ->  Salida: 2+8+12+2 = 24
// ---------------------------------------------------------------------
function sumaPares(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    // Un numero es par cuando el residuo entre 2 es 0
    if (arreglo[i] % 2 === 0) {
      suma = suma + arreglo[i];
    }
  }

  return suma;
}

console.log('--- Ejercicio 4 ---');
console.log(sumaPares([1, 2, 5, 8, 9, 12, 2, 3])); // 24


// ---------------------------------------------------------------------
// 5. Crear una funcion con el nombre booleanoArray() que tome dos
//    arreglos de numeros como parametro y retorne un booleano.
//    Unir los dos arreglos en uno solo; si la longitud del nuevo
//    arreglo es mayor o igual a 10 retorna true, si es menor a 10
//    retorna false.
//    Entrada: [2, 5, 2, 3, 7, 2] y [1, 5, 3, 3]
//    Salida: ArregloNuevo [2,5,2,3,7,2,1,5,3,3]  ->  true
// ---------------------------------------------------------------------
function booleanoArray(arreglo1, arreglo2) {
  // Unimos los dos arreglos con el operador spread
  let arregloNuevo = [...arreglo1, ...arreglo2];

  // Retorna true si tiene 10 o mas elementos, false si tiene menos
  return arregloNuevo.length >= 10;
}

console.log('--- Ejercicio 5 ---');
console.log(booleanoArray([2, 5, 2, 3, 7, 2], [1, 5, 3, 3])); // true


// ---------------------------------------------------------------------
// 6. Crear una funcion con el nombre funcionArray() que tome dos
//    arreglos de numeros enteros como parametro y retorne un unico
//    arreglo, cada elemento multiplicado por dos.
//    Entrada: [2, 5, 2] y [1, 5, 3]
//    Salida: ArregloNuevo [4, 10, 4, 2, 10, 6]
// ---------------------------------------------------------------------
function funcionArray(arreglo1, arreglo2) {
  // Primero unimos los dos arreglos en uno solo
  let unidos = [...arreglo1, ...arreglo2];
  let resultado = [];

  for (let i = 0; i < unidos.length; i++) {
    // Agregamos cada elemento multiplicado por dos
    resultado.push(unidos[i] * 2);
  }

  return resultado;
}

console.log('--- Ejercicio 6 ---');
console.log(funcionArray([2, 5, 2], [1, 5, 3])); // [4, 10, 4, 2, 10, 6]


// ---------------------------------------------------------------------
// 7. Escribir un programa que almacene la cadena "password" en una
//    variable, pregunte al usuario por la contraseña e imprima si la
//    contraseña introducida coincide con la guardada, sin tener en
//    cuenta mayusculas y minusculas.
//    Entrada: "password"  ->  Salida: La contraseña es correcta
// ---------------------------------------------------------------------
function verificarPassword(contrasenaIngresada) {
  let password = 'password';

  // toLowerCase() pasa todo a minusculas para ignorar mayus/minus
  if (contrasenaIngresada.toLowerCase() === password.toLowerCase()) {
    return 'La contrase\u00f1a es correcta';
  } else {
    return 'La contrase\u00f1a es incorrecta';
  }
}

console.log('--- Ejercicio 7 ---');
// En lugar de prompt() usamos un dato de ejemplo para la demostracion
console.log(verificarPassword('PASSWORD')); // La contraseña es correcta


// ---------------------------------------------------------------------
// 8. Sala de juegos: preguntar la edad del cliente y mostrar el precio.
//    Menor de 4 anios: gratis | entre 4 y 18: 5€ | mayor de 18: 10€
//    Entrada: 16  ->  Salida: El costo de la entrada es 5€
// ---------------------------------------------------------------------
function precioEntrada(edad) {
  if (edad < 4) {
    return 'El costo de la entrada es gratis';
  } else if (edad <= 18) {
    return 'El costo de la entrada es 5€';
  } else {
    return 'El costo de la entrada es 10€';
  }
}

console.log('--- Ejercicio 8 ---');
console.log(precioEntrada(16)); // El costo de la entrada es 5€


// ---------------------------------------------------------------------
// 9. Tributar: se debe ser mayor de 18 anios y tener ingresos iguales o
//    superiores a 1000€ mensuales.
//    Entrada: edad 21, ingresos 1350  ->  Salida: Si tienes que tributar
// ---------------------------------------------------------------------
function tributar(edad, ingresos) {
  if (edad > 18 && ingresos >= 1000) {
    return 'S\u00ed tienes que tributar';
  } else {
    return 'No tienes que tributar';
  }
}

console.log('--- Ejercicio 9 ---');
console.log(tributar(21, 1350)); // Sí tienes que tributar


// ---------------------------------------------------------------------
// 10. Rueda: pedir diametro y grosor (en metros).
//     a) diametro > 1.4           -> vehiculo grande
//        1.4 >= diametro > 0.8     -> vehiculo mediano
//        en otro caso             -> vehiculo pequeno
//     b) grosor inferior al recomendado:
//        - diametro > 1.4 con grosor < 0.4
//        - 1.4 >= diametro > 0.8 con grosor < 0.25
//     Entrada: diametro 1.1, grosor 0.24
//     Salida: La rueda es para un vehiculo mediano.
//             Su grosor es inferior al recomendado.
// ---------------------------------------------------------------------
function rueda(diametro, grosor) {
  let mensaje = '';

  // Parte a) tamanio del vehiculo segun el diametro
  if (diametro > 1.4) {
    mensaje = 'La rueda es para un veh\u00edculo grande';
  } else if (diametro > 0.8) {
    mensaje = 'La rueda es para un veh\u00edculo mediano';
  } else {
    mensaje = 'La rueda es para un veh\u00edculo peque\u00f1o';
  }

  // Parte b) comprobar si el grosor es inferior al recomendado
  if (
    (diametro > 1.4 && grosor < 0.4) ||
    (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)
  ) {
    mensaje = mensaje + '\nSu grosor es inferior al recomendado';
  }

  return mensaje;
}

console.log('--- Ejercicio 10 ---');
console.log(rueda(1.1, 0.24));


// ---------------------------------------------------------------------
// 11. Datos de cinco personas. Crear funciones para:
//     - Hallar quienes tienen el salario mayor a 1200.
//     - Hallar quien es el primero que tiene como hobby cantar.
//     - Devolver un booleano si al menos a uno le gusta leer.
// ---------------------------------------------------------------------
let personas = [
  { nombre: 'boris', hobby: 'correr', salario: 2000 },
  { nombre: 'luis', hobby: 'cantar', salario: 1500 },
  { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
  { nombre: 'percy', hobby: 'cantar', salario: 1100 },
  { nombre: 'rosa', hobby: 'leer', salario: 3000 },
];

// Quienes tienen salario mayor a 1200
function salarioMayor1200(lista) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].salario > 1200) {
      resultado.push(lista[i].nombre);
    }
  }
  return resultado;
}

// Primer persona cuyo hobby es cantar
function primerCantante(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].hobby === 'cantar') {
      return lista[i].nombre;
    }
  }
  return 'Nadie canta';
}

// true si al menos a una persona le gusta leer
function algunoLee(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].hobby === 'leer') {
      return true;
    }
  }
  return false;
}

console.log('--- Ejercicio 11 ---');
console.log(salarioMayor1200(personas)); // ['boris', 'luis', 'rosa']
console.log(primerCantante(personas));   // luis
console.log(algunoLee(personas));        // true


// ---------------------------------------------------------------------
// 12. Turnos semanales de atencion al cliente:
//     Lunes-Maria, Martes-Luis, Miercoles-Antonia, Jueves-Pedro,
//     Viernes-Marisa. Crear una funcion que retorne el encargado
//     segun el dia. Si el dia no existe, decir que no hay servicio.
//     servicio('Lunes') -> "Este dia se encarga Maria"
// ---------------------------------------------------------------------
let turnos = [
  { dia: 'lunes', nombre: 'Mar\u00eda' },
  { dia: 'martes', nombre: 'Luis' },
  { dia: 'miercoles', nombre: 'Antonia' },
  { dia: 'jueves', nombre: 'Pedro' },
  { dia: 'viernes', nombre: 'Marisa' },
];

function servicio(dia) {
  // Normalizamos a minusculas para que no importen las mayusculas
  let diaBuscado = dia.toLowerCase();

  for (let i = 0; i < turnos.length; i++) {
    if (turnos[i].dia === diaBuscado) {
      return 'Este d\u00eda se encarga ' + turnos[i].nombre;
    }
  }
  return 'Ese d\u00eda no hay servicio';
}

console.log('--- Ejercicio 12 ---');
// En lugar de prompt() usamos un dato de ejemplo para la demostracion
console.log(servicio('Lunes'));    // Este día se encarga María
console.log(servicio('Domingo'));  // Ese día no hay servicio


// ---------------------------------------------------------------------
// 13. Tienda: monitores, teclados y ratones. Los precios se almacenan
//     como pares producto - precio. Crear una funcion que reciba el
//     nombre de un producto y devuelva su precio.
//     Lista: monitor 200€, teclado 20€, raton 10€
//     precio('monitor') -> 200
// ---------------------------------------------------------------------
let listaPrecios = [
  { producto: 'monitor', precio: 200 },
  { producto: 'teclado', precio: 20 },
  { producto: 'raton', precio: 10 },
];

function precio(nombreProducto) {
  let buscado = nombreProducto.toLowerCase();

  for (let i = 0; i < listaPrecios.length; i++) {
    if (listaPrecios[i].producto === buscado) {
      return listaPrecios[i].precio;
    }
  }
  return 'Ese producto no existe';
}

console.log('--- Ejercicio 13 ---');
// En lugar de prompt() usamos un dato de ejemplo para la demostracion
console.log(precio('monitor')); // 200
console.log(precio('raton'));   // 10
