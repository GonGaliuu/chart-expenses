let domingo = document.getElementById('domingo')
let segunda = document.getElementById('segunda')
let terca = document.getElementById('terca')
let quarta = document.getElementById('quarta')
let quinta = document.getElementById('quinta')
let sexta = document.getElementById('sexta')
let sabado = document.getElementById('sabado')
let showdiv = document.getElementsByClassName('showstats')
let espaco = document.getElementsByClassName('content__bars')
let balanco = document.getElementById('balance')
balanco.innerHTML = '' + parseFloat(Math.random() * 1000).toFixed(2)
let valorsemana = document.getElementById('valorsemana')

let elementos = new Array(domingo, segunda, terca, quarta, quinta, sexta, sabado)
let valores = new Array(valordomingo, valorsegunda, valorterca, valorquarta, valorquinta, valorsexta, valorsabado)
var valor = new Array()
let multiplicarPor = 0

elementos.forEach(barra => {
    valor.push(parseFloat(Math.random() * 100).toFixed(2))
});

valor.forEach(soma =>{
    multiplicarPor = parseFloat(multiplicarPor) + parseFloat(soma)
})

let totalsemana = multiplicarPor
valorsemana.innerHTML = '' + parseFloat(totalsemana).toFixed(2)

multiplicarPor = multiplicarPor / 8
let maior = 0
valor.forEach(value =>{
    if (maior < value){
        maior = value
    }
})

elementos.forEach(barra =>{
    let index = elementos.indexOf(barra)
    barra.style = 'height: '+ (valor[index] * 8) / maior +'rem'
})


elementos.forEach(barra => {
    barra.addEventListener('mouseover', ()=>{
        let index = elementos.indexOf(barra)
        showdiv[index].style = 'display: grid;'
        espaco[0].style = 'margin-top: 0;'
        valores[index].innerHTML = 'R$ ' + valor[index]
    })
    barra.addEventListener('mouseleave', ()=>{
        let index = elementos.indexOf(barra)
        showdiv[index].style = 'display: none;'
        espaco[0].style = 'margin-top: 4rem;'
    })
});