const fs = require('node:fs/promises')
console.log('leyendo archivo 1...')
fs.readFile('./archivo.txt', 'utf-8')
  .then((text) => {
    console.log(text)
  })
  .catch((err) => {
    console.error(err)
  })

console.log('Hacer cosas mientras se lee el archivo...')

console.log('leyendo archivo 2...')
const text2 = fs.readFile('./archivo2.txt', 'utf-8')
  .then((text) => {
    console.log(text2)
  })
  .catch((err) => {
    console.error(err)
  })
