const fs = require('node:fs')

console.log('leyendo archivo 1...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log('Error al leer el archivo')
    return
  }
  console.log(text)
}
)

console.log('Hacer cosas mientras se lee el archivo...')

console.log('leyendo archivo 2...')
const text2 = fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log('Error al leer el archivo')
    return
  }
  console.log(text2)
}
)
