

function clicar(){
    
    var img = document.getElementById('imagem')

    var membro = document.getElementById('tri').value
var m1 = 'luffy'
var m11= 'Luffy' 
var m2 = 'zoro'
var m22 = 'Zoro'
var m3 = 'Sanji'    
var m33 = 'sanji'
    
if(membro == m1 || membro == m11){

        document.body.style.background = '#dbb06d'
        img.src = 'luffy.png'
        
    }else if(membro == m2 || membro == m22){

        document.body.style.background = '#1cc350'
        img.src = 'zoro.png'
    
    }else if(membro == m3 || membro == m33){

           document.body.style.background = '#ddd346'
           img.src = 'sanji.jpg'

    }


}