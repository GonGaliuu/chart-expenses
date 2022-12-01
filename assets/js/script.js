let domingo = document.getElementById('domingo')
let segunda = document.getElementById('segunda')
let terca = document.getElementById('terca')
let quarta = document.getElementById('quarta')
let quinta = document.getElementById('quinta')
let sexta = document.getElementById('sexta')
let sabado = document.getElementById('sabado')

let valordomingo = parseInt(prompt('Quanto você gastou no domingo? '))
let valorsegunda = parseInt(prompt('Quanto você gastou na segunda? '))
let valorterca = parseInt(prompt('Quanto você gastou na terca? '))
let valorquarta = parseInt(prompt('Quanto você gastou na quarta? '))
let valorquinta = parseInt(prompt('Quanto você gastou na quinta? '))
let valorsexta = parseInt(prompt('Quanto você gastou na sexta? '))
let valorsabado = parseInt(prompt('Quanto você gastou no sabado? '))


let resultado = valordomingo + valorsegunda + valorterca + valorquarta + valorquinta + valorsexta + valorsabado
resultado = resultado / 12
console.log(resultado * valordomingo)
domingo.style.height = (resultado * valordomingo) + 'rem'