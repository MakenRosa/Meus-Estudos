var num = document.querySelector('input#numero')
var seletor = document.querySelector('select#lista')
var nums = []
var res = document.querySelector('div#res')
var numero = Number(0)

function enumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inlista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    } else{ 
        return false
    }
}

function adicionar(){
    if(enumero(num.value) && !inlista(num.value, nums)){
        nums.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado!`
        seletor.appendChild(item)
    }else{
        window.alert('Não foi possível adicionar o valor pois ele já está na lista!')
    }}

function maior(lista){
    for(numero; numero <= lista.length; numero++){
        if (numero == 0) {
            var maior = Number(lista[0])
        } else{
            if (maior < lista[numero].value){
                maior = Number(lista[numero].value)
            }
        }
    }
    return (maior.value)
}

function analise(){
    res.append(` Ao todo, temos ${nums.length} números cadastrados`)
    res.append(`O maior número digitado foi ${maior(nums)}`)
}