import { readFile } from 'node:fs/promises'

console.log('leyendo archivo 1...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log(text)

console.log('Hacer cosas mientras se lee el archivo...')

console.log('leyendo archivo 2...')
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log(text2)
