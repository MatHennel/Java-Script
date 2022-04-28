function contar() {
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    let ress = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        ress.innerHTML = ' Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0){
            window.alert('Impossivel contar.Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                ress.innerHTML += ` ${c} \u{1F603} `
            }
        } else {
            //Contagem decrescente
            for (c = i; c >= f; c -= p) {
                ress.innerHTML += ` ${c} \u{1F603} `
            }
        }
    }



}