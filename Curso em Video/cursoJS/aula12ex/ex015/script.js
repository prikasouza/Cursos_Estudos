function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || fano.value > ano) {
    alert('[Erro] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement ('img')
    img.setAttribute('id','foto')

    if(fsex[0].checked){
      gênero = 'Homem'
      if(idade>=0 && idade < 10) {
        //criança
        img.setAttribute('src', 'image/crianca_homem.png')
      }else if(idade < 21){
        //adolescente
        img.setAttribute('src', 'image/adolescente_homem.png')
      } else if (idade < 50){
        //adulto
        img.setAttribute('src', 'image/adulto_homem.png')
      }else { 
        //idoso
        img.setAttribute('src', 'image/idoso_homem.png')
      }
    } else if (fsex[1].checked){
      gênero = 'Mulher'
      if(idade>=0 && idade < 10) {
        //criança
        img.setAttribute('src', 'image/crianca_mulher.png')
      }else if(idade < 21){
        //adolescente
        img.setAttribute('src', 'image/adolescente_mulher.png')
      } else if (idade < 50){
        //adulto
        img.setAttribute('src', 'image/adulto_mulher.png')
      }else { 
        //idoso
        img.setAttribute('src', 'image/idosa_mulher.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = ` Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    img.style.margin = '10px';
  }

}