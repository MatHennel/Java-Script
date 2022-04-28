function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //               document.querySelectorById('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    
    if( hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#7295b5'
        msg.innerHTML = `Agora são ${hora} horas da manhã.`

    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#a06840'
        msg.innerHTML = `Agora são ${hora} horas da tarde.`

    } else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background= '#303575'
        msg.innerHTML = `Agora são ${hora} horas da noite.`}
        
    if (hora >= 0 && hora < 5){
        //BOA MADRUGADA
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#0a181a'
        msg.innerHTML = `Agora são ${hora} horas da madrugada.`
        }
    
}

