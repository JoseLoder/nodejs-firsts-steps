// Argumentos de entrada.
console.log(process.argv)

// Controlar eventos del proceso.
process.on('exit', () => {
  console.log('El proceso terminó')
})

// current working directory
console.log(process.cwd())

// Controlar el proceso y su salida.
process.exit(1)
