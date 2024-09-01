const fs = require('node:fs/promises')

// IIFE - Immediately Invoked Function Expression

// (async () => {
//     console.log('leyendo archivo 1...');
//     try {
//         const text = await fs.readFile('./archivo.txt', 'utf-8');
//         console.log(text);
//     } catch (err) {
//         console.error(err);
//     }
//     console.log('Hacer cosas mientras se lee el archivo...');
//     console.log('leyendo archivo 2...');
//     try {
//         const text2 = await fs.readFile('./archivo2.txt', 'utf-8');
//         console.log(text2);
//     } catch (err) {
//         console.error(err);
//     }
// }
// )();

async function init () {
  console.log('leyendo archivo 1...')
  const text = await fs.readFile('./archivo.txt', 'utf-8')
  console.log(text)
  console.log('Hacer cosas mientras se lee el archivo...')
  console.log('leyendo archivo 2...')
  const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
  console.log(text2)
}

init()
