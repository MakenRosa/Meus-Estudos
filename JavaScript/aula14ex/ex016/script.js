function contar(){
    var ini = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    res.innerHTML = 'CONTADO: '
    for(var c = i; c<f; c += p){
        res.innerHTML += `${c} > `
    }
    res.innerHTML += 'FIM'
}
