/**
 * Crear un array y mostrarlo en consola
 */
// var fruta = ["Manzana", "Plátano", "Melocotón"];
// console.log(fruta);

/**
 * Acceder a un elemento por índice
 */

// var nums = [10, 20, 30];
// console.log(nums[0]);

/**
 * Agregar y eliminar elementos
 */

// const colores = ["Rojo", "Verde", "Negro"];
// const nuevoColor = "Amarillo";
// colores.push(nuevoColor);
// colores.splice(1, 1);
// console.log(colores);

/**
 * Recorrer un array con un for
 */
// const nombres = ["Ana", "Luis", "Pedro"];
// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }

/**
 * Transformar con map()
 */

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const pares = numeros.map(num => num * 2);
// console.log(pares);


/**
 * Filtrar con filter()
 */

// const edades = [15, 22, 18, 30];
// const mayores = edades.filter(edad => edad >= 18);
// const menores = edades.filter(edad => edad < 18);
// console.log("Mayores: " + mayores);
// console.log("Menores: "+ menores);

/**
 * Reducir con reduce() (sumar todos los elementos)
 */

// const numeros = [5, 10, 15];
// const suma = numeros.reduce((total, n) => total + n , 0);

// console.log(suma);

/**
 * Buscar con find()
 */

// const productos = ["Ratón", "Teclado", "Pantalla"];
// const encontrado = productos.find(p => p = "Ratón");
// console.log(encontrado);

/**
 * Ordenar un array numérico de menor a mayor
 */
// const a = [4, 2, 9, 10, 60, 23, 76, 41, 91, 102, 89];
// const menorMayor = a.sort((a,b) => a-b);
// console.log(menorMayor);


/**
 * Eliminar duplicados de un array
 */
// const nums = [3, 7, 1, 9, 2, 2, 3, 8];
// const noDuplicados = [ ...new Set(nums)];
// console.log(noDuplicados);


/**
 * Combinar dos arrays y ordenarlos
 */
// const a1 = [5, 8, 0, 3, 17, 32];
// const a2 = [94,105,32,74,17,35];
// for (let index = 0; index < a2.length; index++) {
//     a1.push(a2[index]);   
// }
// a1.sort((a,b) => a-b);

// console.log(a1);

/**
 * Transformar un array de objetos
 */
const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 25 }
];
const nombres = usuarios.map(u => u.nombre);
console.log(nombres);
