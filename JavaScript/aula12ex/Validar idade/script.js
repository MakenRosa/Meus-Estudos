function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('Erro! Dados digitados estão incorretos, verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <11){
                img.setAttribute('src', 'imagens/menino.jpg')
            }else if (idade <18){
                img.setAttribute('src', 'imagens/jovemh.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/homem.jpg')
            } else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else {
            genero = 'Mulher'
            if (idade >= 0 && idade <11){
                img.setAttribute('src', 'imagens/menina.jpg')
            }else if (idade <18){
                img.setAttribute('src', 'imagens/jomemm.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} de ${idade} anos.`
        img.style.maxWidth= '300px'
        img.style.maxHeight='300px'
        img.style.display='block'
        img.style.margin= 'auto'
        img.style.borderRadius= '500px'
        res.appendChild(img)
    }
}