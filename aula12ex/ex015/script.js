function verificar(){
       var data = new Date
       var ano = data.getFullYear()
       var fano = document.getElementById('txtano')
       var res = document.getElementById('res')
       if (fano.value.length == 0 || Number(fano.value) > ano){
           window.alert('[ERRO}Verifique os dados e tente novamente!')
       }else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var img = document.createElement('img')
            img.setAttribute('id','foto')
            if(fsex[0].checked){
                document.body.style.background = '#2e8ef0'
                if(idade >= 0 && idade < 14){
                    //criaça
                    img.setAttribute('src', 'bebehomem.png')
                    res.innerHTML = `Detectamos criança com ${idade} anos de idade`
                
                }else if(idade < 21){
                    //jovem
                    img.setAttribute('src', 'adolescentehomem.png')
                    res.innerHTML = `Detectamos jovem com ${idade} anos de idade`

                }else if(idade < 50){
                    //adulto
                    img.setAttribute('src', 'adultohomem.png')
                    res.innerHTML = `Detectamos adulto com ${idade} anos de idade`

                }else {
                    //idoso
                    img.setAttribute('src', 'idosohomem.png')
                    res.innerHTML = `Detectamos idoso com ${idade} anos de idade`
                }
            
            
            
            }else if(fsex[1].checked){
                document.body.style.background = '#cc393f'

                if(idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'bebemulher.png')
                    res.innerHTML = `Detectamos criança com ${idade} anos de idade`

                }else if(idade < 21){
                    //jovem
                    img.setAttribute('src', 'adolescentemulher.png')
                    res.innerHTML = `Detectamos jovem com ${idade} anos de idade`

                }else if(idade < 50){
                    //adulta
                    img.setAttribute('src', 'adultomulher.png')
                    res.innerHTML = `Detectamos adulta com ${idade} anos de idade`

                }else{
                    //idosa
                    img.setAttribute('src', 'idosomulher.png')
                    res.innerHTML = `Detectamos idosa com ${idade} anos de idade`
                }
            }
            res.style.textAlign ='center' //centralizar o texto
            
            res.appendChild(img) //Colocar uma imagem via script
       }

}