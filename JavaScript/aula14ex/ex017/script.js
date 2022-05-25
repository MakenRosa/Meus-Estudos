function tabuar(){
    var num = document.querySelector('input#num')
    var seletor = document.querySelector('select#sel')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        p.innerHTML = ''
        let n = Number(num.value)
        let c = 1
        seletor.innerHTML= ''
        for(num; c < 11; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `seletor${c}`
            seletor.appendChild(item)
        }
        res.style.fontSize = '12pt'
        res.style.lineHeight= '25px'
        seletor.style.margin = '10px 0px'
    }
}