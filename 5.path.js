const path = require('node:path')

// Barra espaciadora segun el sistema operativo
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('folder', 'subfolder', 'archivo.txt')
console.log(filePath)

// Obtener la ultima parte de una ruta
const base = path.basename(filePath)
console.log(base)

// Obtener la extension del archivo
const ext = path.extname(filePath)
console.log(ext)

// Obtenerlo sin la extension del archivo
const baseSinExtension = path.basename(filePath, ext)
console.log(baseSinExtension)
