let operations = require('./principal');

operations.sumarFn(5,7);
operations.restarFn(10,2);
operations.dividirFn(9,3);
operations.multiplicarFn(4,8);

// Destructuración: debe ser el mismo nombre
let {sumarFn, 
    restarFn, 
    dividirFn, 
    multiplicarFn} = require('./principal');

sumarFn(5,7);
restarFn(10,2);
dividirFn(9,3);
multiplicarFn(4,8);