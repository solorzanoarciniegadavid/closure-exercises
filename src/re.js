// Reasignacion y redeclaración

/*
const -> block scope
no redeclare
no reassign
no hoisted
*/


/*
var -> global or local scope
yes redeclare
yes reassign
yes hosited
*/

/*
let ->block scope
no redeclare
yes reassign 
no hoisted
*/


var name;
name = "David";
console.log(name);

let nombre;
nombre = 'Apostolico';
console.log(nombre);


const pi = 3.1416;
console.log(pi)