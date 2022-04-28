var agora = new Date()
var hora = agora.getHours()
console.log(`Agr são exatamente ${hora} horas`)
if(hora < 12){
    console.log(`Bom dia!`)
}else if (hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}if(hora < 5){
    console.log('Boa madrugada!')
}