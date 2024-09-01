import { platform, version, totalmem, freemem, cpus, arch } from 'node:os'

console.log('Nombre del sistema operativo', platform())
console.log('Versión del sistema operativo', version())
console.log('Memoria total del sistema', totalmem())
console.log('Memoria libre del sistema', freemem())
console.log('CPU del sistema', cpus())
console.log('arquitecura del sistema', arch())
