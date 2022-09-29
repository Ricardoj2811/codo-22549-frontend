const alumnos = [
    {
        edad: 25,
        nombre: 'Carlos',
        carrera: 'ING'
    },
    {
        edad: 30,
        nombre: 'Rodrigo',
        carrera: 'LIC'
    },
    {
        edad: 29,
        nombre: 'Reinaldo',
        carrera: 'Matematicas'
    },
    {
        edad: 40,
        nombre: 'Ricardo',
        carrera: 'Quimica'
    },
    {
        edad: 35,
        nombre: 'Pedro',
        carrera: 'Fisica'
    }

];

let sumaEdades = 0;
for (let i = 0; i < alumnos.length; i++) {
    sumaEdades += alumnos[i].edad;
}
console.log('primer forma:', sumaEdades);

// Segunda Forma
sumaEdades = 0
for (let alumno of alumnos) {
    sumaEdades += alumno.edad;
}
console.log('segunda forma:', sumaEdades);

sumaEdades = 0
alumnos.forEach(alumno => sumaEdades += alumno.edad)

console.log('tercer forma:', sumaEdades);

// -------------------------------------
// LISTA DE ALUMNOS MENORES DE 40
const menoresDe40 = [];
for(let alumno of alumnos){
    if(alumno.edad < 40){
        menoresDe40.push(alumno);
    }
}
console.log('Menores de 40', menoresDe40);

// FILTER: Retorna una lista de lo que se filtro
const alumnosMenoresDe40 = alumnos.filter(alumno => alumno.edad < 40);

console.log(alumnosMenoresDe40);

// EXISTE ALGUN ALUMNO DE 25 AÑOS?
let existe = false;
for (let i=0; i<alumnos.length && !existe; i++) {
    existe = alumnos[i].edad === 25;
}

console.log(existe);

// .some retorna un booleano
const existeAlumno25 =  alumnos.some(alumno => alumno.edad === 25);
console.log(existeAlumno25);

//QUIERO SABER SI "TODOS" LOS ALUMNOS TIENEN 35 AÑOS
let todos = true;
for (let i=0; i<alumnos.length && todos; i++) {
    todos = alumnos[i].edad === 35;
}
console.log(todos);
// every devuelve un booleano si todos cumplen una condicion dada
const todos2 = alumnos.every(alumno => alumno.edad === 35);
console.log(todos2);

// QUIERO SOLO LOS NOMBRE DE LOS ALUMNOS
const nombres = [];
for (let alumno of alumnos){
    nombres.push(alumno.nombre);
}
console.log(nombres);

// map mapea los resultados en otro objeto para
const nombresMap = alumnos.map(alumno => alumno.nombre);
console.log(nombresMap);

// reduce
const sumaReduce =  alumnos.reduce((acum, actual) => acum + actual.edad,0);
console.log(sumaReduce);