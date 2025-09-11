let vistoMenu = document.getElementById("visto_menu")

function tirar_colocar_menu(){
    if(vistoMenu.style.display== "none"){
        vistoMenu.style.display= "block"
    }else{
        vistoMenu.style.display= "none"
    }
}

function messaging(mostrado, desfocado){
    mostrado.style.display= "block"

    const desf= [...desfocado.querySelectorAll("*")]
    for (p of desf){
        p.style.filter="blur(3px)"
        p.style.pointerEvents = "none"
    }
}

function removeMessaging(){
    document.querySelector("section.aviso").style.display = "none"

    const desf= [...document.querySelector(".primario").querySelectorAll("*")]
    for (p of desf){
        p.style.filter="blur(0px)"
        p.style.pointerEvents = "all"
    }
}

function limparCampos(){
    let teste1= document.getElementById("teste1")
    let teste2= document.getElementById("teste2")
    let mini_teste1= document.getElementById("mini_teste1")
    let mini_teste2= document.getElementById("mini_teste2")

    teste1.value=""
    teste2.value=""
    mini_teste1.value=""
    mini_teste2.value=""
}

function calculadora (){

    messaging(document.querySelector("section.aviso"), document.querySelector(".primario"))

    let titulo = document.getElementById("titulo")
    let teste1= document.getElementById("teste1")
    let teste2= document.getElementById("teste2")
    let mini_teste1= document.getElementById("mini_teste1")
    let mini_teste2= document.getElementById("mini_teste2")

    let alerta = document.getElementById("message")
    let mostraMedias = document.getElementById("testesEminitestes")
    let Medias_gerais = document.getElementById("gerEarred")

    let tesTe1 = Number(teste1.value)
    let tesTe2 = Number(teste2.value)
    let miniTeste1= Number(mini_teste1.value)
    let miniTeste2 = Number(mini_teste2.value)

    var calculandoteste= ((tesTe1+tesTe2)/2) * 0.75
    var calculandoMiniteste = ((miniTeste1+miniTeste2)/2)*0.25

    var media = calculandoteste+calculandoMiniteste

    titulo.innerHTML=`<h3>Os seus resultados</h3>`
    
    mostraMedias.innerHTML=`<p>Media de Testes: ${calculandoteste}</p>
            <p>Media de MiniTestes: ${calculandoMiniteste}</p>`

    Medias_gerais.innerHTML= `<p>Média Geral: ${media}</p>
            <p>Média Geral Arredondada: ${media}</p>`

    if((media>=16) && (media<21)){
        alerta.innerHTML=`<p>Muitíssimos parabéns a media chega para dispensar</p>`
        alerta.style.color= "rgb(255, 215, 0)"

    } else if(media>=10){
        alerta.style.color="rgb(0, 255, 0)"
        alerta.innerHTML=`<p>Parabéns a media chega para admitir (Boa sorte no exame!)</p>`
       
    }else if((media<10)){}
}