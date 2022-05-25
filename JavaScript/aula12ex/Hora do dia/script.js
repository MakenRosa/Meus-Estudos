function carregar(){
    var hora = window.document.getElementById('hora')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var horario = data.getHours()
    var minutos = data.getMinutes()
    hora.innerHTML = `Agora são ${horario}:${minutos}`
    if (horario >= 0 && horario < 12){
        foto.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = "#FADEB2"
    } else if (horario < 18 && horario >= 12){
        foto.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = "#2C0C8A"
    } else{
        foto.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = "#4D96F0"
    }
}