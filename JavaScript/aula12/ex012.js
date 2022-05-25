var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var horario = `${hora} horas e ${minuto} minutos`
console.log(`Agora são ${horario} `)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora <=18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}