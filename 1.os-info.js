const os = require('node:os')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.version())
console.log('Memoria total del sistema', os.totalmem())
console.log('Memoria libre del sistema', os.freemem())
console.log('CPU del sistema', os.cpus())
console.log('arquitecura del sistema', os.arch())
