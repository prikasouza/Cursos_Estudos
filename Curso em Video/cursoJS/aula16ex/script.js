let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}
function inLista(n,l){
  if(l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
  } else{
    alert('Valor invalido ou já encontrado na lista')
  }
  num.value = '' // para limpar o conteudo no input
  num.focus() // para deixar o cursor de volta no input
}

function finalizar(){
  if(valores.length == 0) {
    alert('Preencher com algum dado')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores){
      soma += valores[pos]
      media = soma / valores.length
      if(valores[pos]> maior)
      maior = valores[pos]
      if (valores[pos]< menor)
      menor = valores[pos]
    }

    res.innerHTML = ''
    res.innerHTML += `<p> No total, temos ${tot} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>O valor da soma é ${soma}</p>`
    res.innerHTML += `<p>O valor da média é ${media}</p>`
  }

}