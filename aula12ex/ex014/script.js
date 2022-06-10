function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //               document.querySelectorById('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if( hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.backgroundImage = "url('fundomanha.png')";
        document.body.style.backgroundSize = 'cover'
        //document.body.style.background = '#7295b5'
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
        msg.style.fontWeight = '1000'


    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.backgroundImage = "url('fundotarde.png')";
        document.body.style.backgroundSize = 'cover'
        //document.body.style.background = '#a06840'
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
        msg.style.fontWeight = '1000'


    } else{
        //BOA NOITE
        img.src = 'fundonoite.png'
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
        document.body.style.backgroundImage = "url('fundonoite.png')";
        //document.body.style.background= '#303575'
        msg.innerHTML = `Agora são ${hora} horas da noite.`}
        msg.style.fontWeight = '1000'

        
        
    if (hora >= 0 && hora < 5){
        //BOA MADRUGADA
        img.src = 'fotomadrugada.png'
        document.body.style.backgroundImage = "url('fundomadrugada.jpg')";
        document.body.style.backgroundSize = 'cover'
        //document.body.style.background = '#0a181a'
        msg.innerHTML = `Agora são ${hora} horas da madrugada.`
        msg.style.fontWeight = '1000'

        }

}

function relogio(){
    
    var data=new Date();
    var hor=data.getHours();
    var min=data.getMinutes();
    var seg=data.getSeconds();
    
    if(hor < 10){
        hor="0"+hor;
    }
    if(min < 10){
        min="0"+min;
    }
    if(seg < 10){
        seg="0"+seg;
    }
    
    var horas=hor + ":" + min + ":" + seg;
    
    document.getElementById("rel").value=horas;
}

var timer=setInterval(relogio,1000);
    