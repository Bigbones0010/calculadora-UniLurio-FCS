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

function limparCampos(testes,mini_testes){
    let teste1= document.getElementById("teste1")
    let teste2= document.getElementById("teste2")
    let teste3= document.getElementById("teste3")
    let teste4= document.getElementById("teste4")
    let mini_teste1= document.getElementById("mini_teste1")
    let mini_teste2= document.getElementById("mini_teste2")
    let mini_teste3= document.getElementById("mini_teste3")
    let mini_teste4= document.getElementById("mini_teste4")

    if(testes==1){
        teste1.value=""
    }else if(testes==2){
        teste1.value=""
        teste2.value=""
    }else if(testes==3){
        teste1.value=""
        teste2.value=""
        teste3.value=""
    }else if(testes==4){
        teste1.value=""
        teste2.value=""
        teste3.value=""
        teste4.value=""
    }
    
    if (mini_testes==1){
        mini_teste1.value=""
    }else if (mini_testes==2){
        mini_teste1.value=""
        mini_teste2.value=""
    }else if (mini_testes==3){
        mini_teste1.value=""
        mini_teste2.value=""
        mini_teste3.value=""
    }else if (mini_testes==4){
        mini_teste1.value=""
        mini_teste2.value=""
        mini_teste3.value=""
        mini_teste4.value=""
    }
    
}

let campesin_testes= document.getElementById("totCamp_test")

let campesin_miniTest= document.getElementById("totCamp_Minitest")

let buttons = document.getElementById("botaoCalcular")

var allTest=1
var allMinitest=1

function spaces(tests, minitests){

    if(tests==1){
        campesin_testes.innerHTML=`<div class="preenchendo">
                            <label for="teste1">Teste 1</label><input type="number" name="teste1" id="teste1" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>`
        allTest=1
    }else if(tests==2){
        campesin_testes.innerHTML=`<div class="preenchendo">
                            <label for="teste1">Teste 1</label><input type="number" name="teste1" id="teste1" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="teste2">Teste 2</label><input type="number" name="teste2" id="teste2" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>`
        allTest=2
    }else if(tests==3){
        campesin_testes.innerHTML=`<div class="preenchendo">
                            <label for="teste1">Teste 1</label><input type="number" name="teste1" id="teste1" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="teste2">Teste 2</label><input type="number" name="teste2" id="teste2" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="teste3">Teste 3</label><input type="number" name="teste3" id="teste3" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                       `
        allTest=3
    }else if(tests==4){
        campesin_testes.innerHTML=`<div class="preenchendo">
                            <label for="teste1">Teste 1</label><input type="number" name="teste1" id="teste1" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="teste2">Teste 2</label><input type="number" name="teste2" id="teste2" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="teste3">Teste 3</label><input type="number" name="teste3" id="teste3" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="teste4">Teste 4</label><input type="number" name="teste4" id="teste4" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>`
        allTest=4
    }

    if (minitests==1){
        campesin_miniTest.innerHTML=`<div class="preenchendo">
                            <label for="mini_teste1">Mini-teste 1</label><input type="number" name="mini_teste1" id="mini_teste1" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>`
        allMinitest=1
    }else if (minitests==2){
        campesin_miniTest.innerHTML=`<div class="preenchendo">
                            <label for="mini_teste1">Mini-teste 1</label><input type="number" name="mini_teste1" id="mini_teste1" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="mini_teste2">Mini-teste 2</label><input type="number" name="mini_teste2" id="mini_teste2" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>`
        allMinitest=2
    }else if (minitests==3){
        campesin_miniTest.innerHTML=`<div class="preenchendo">
                            <label for="mini_teste1">Mini-teste 1</label><input type="number" name="mini_teste1" id="mini_teste1" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="mini_teste2">Mini-teste 2</label><input type="number" name="mini_teste2" id="mini_teste2" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="mini_teste3">Mini-teste 3</label><input type="number" name="mini_teste3" id="mini_teste3" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>`
        allMinitest=3
    }else if (minitests==4){
        campesin_miniTest.innerHTML=`<div class="preenchendo">
                            <label for="mini_teste1">Mini-teste 1</label><input type="number" name="mini_teste1" id="mini_teste1" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="mini_teste2">Mini-teste 2</label><input type="number" name="mini_teste2" id="mini_teste2" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="mini_teste3">Mini-teste 3</label><input type="number" name="mini_teste3" id="mini_teste3" required placeholder="Introduza de (0 a 20)" min="0" max="20">
                        </div>
                        <div class="preenchendo">
                            <label for="mini_teste4">Mini-teste 4</label><input type="number" name="mini_teste4" id="mini_teste4" required placeholder="Introduza de (0 a 20)" min="0" max="20">`
        allMinitest=4
    }

    buttons.innerHTML=`<button onclick="calculadora (${allTest}, ${allMinitest})">Calcular a Média</button>
                    <button onclick="limparCampos(${allTest}, ${allMinitest})" id="limpador">Limpar campos</button>`
}

function calculadora (testes,minitestes){

    messaging(document.querySelector("section.aviso"), document.querySelector(".primario"))

    let titulo = document.getElementById("titulo")
    let alerta = document.getElementById("message")
    let mostraMedias = document.getElementById("testesEminitestes")
    let Medias_gerais = document.getElementById("gerEarred")

    /*Testes a partir daqui */
    if (testes==1){
        let teste1= document.getElementById("teste1")
        let tesTe1 = Number(teste1.value)
        var calculandoteste= (tesTe1) * 0.75

    }else if (testes==2){
        let teste1= document.getElementById("teste1")
        let tesTe1 = Number(teste1.value)
        let teste2= document.getElementById("teste2")
        let tesTe2 = Number(teste2.value)
        var calculandoteste= ((tesTe1+tesTe2)/2) * 0.75

    }else if (testes==3){
        let teste1= document.getElementById("teste1")
        let tesTe1 = Number(teste1.value)
        let teste2= document.getElementById("teste2")
        let tesTe2 = Number(teste2.value)
        let teste3= document.getElementById("teste3")
        let tesTe3 = Number(teste3.value)
        var calculandoteste= ((tesTe1+tesTe2+tesTe3)/3) * 0.75

    }else if (testes==4){
        let teste1= document.getElementById("teste1")
        let tesTe1 = Number(teste1.value)
        let teste2= document.getElementById("teste2")
        let tesTe2 = Number(teste2.value)
        let teste3= document.getElementById("teste3")
        let tesTe3 = Number(teste3.value)
        let teste4= document.getElementById("teste4")
        let tesTe4 = Number(teste4.value)
        var calculandoteste= ((tesTe1+tesTe2+tesTe3+tesTe4)/4) * 0.75

    }

    /*Aqui os miniTestes */
    if(minitestes==1){
        let mini_teste1= document.getElementById("mini_teste1")
        let miniTeste1= Number(mini_teste1.value)
        var calculandoMiniteste = (miniTeste1)*0.25

    }else if(minitestes==2){
        let mini_teste1= document.getElementById("mini_teste1")
        let mini_teste2= document.getElementById("mini_teste2")
        let miniTeste1= Number(mini_teste1.value)
        let miniTeste2 = Number(mini_teste2.value)
        var calculandoMiniteste = ((miniTeste1+miniTeste2)/2)*0.25

    }else if(minitestes==3){
        let mini_teste1= document.getElementById("mini_teste1")
        let mini_teste2= document.getElementById("mini_teste2")
        let miniTeste1= Number(mini_teste1.value)
        let miniTeste2 = Number(mini_teste2.value)
        let mini_teste3= document.getElementById("mini_teste3")
        let miniTeste3= Number(mini_teste3.value)
        var calculandoMiniteste = ((miniTeste1+miniTeste2+miniTeste3)/3)*0.25

    }else if(minitestes==4){
        let mini_teste1= document.getElementById("mini_teste1")
        let mini_teste2= document.getElementById("mini_teste2")
        let miniTeste1= Number(mini_teste1.value)
        let miniTeste2 = Number(mini_teste2.value)
        let mini_teste3= document.getElementById("mini_teste3")
        let miniTeste3= Number(mini_teste3.value)
        let mini_teste4= document.getElementById("mini_teste4")
        let miniTeste4= Number(mini_teste4.value)
        var calculandoMiniteste = ((miniTeste1+miniTeste2+miniTeste3+miniTeste4)/4)*0.25

    }
    
    var media = calculandoteste+calculandoMiniteste
    var mediaduo = media.toFixed(2)
    var mediaArred = Math.round(media)

    titulo.innerHTML=`<h3>Os Seus Resultados</h3>` 
    mostraMedias.innerHTML=`<p>Media de Testes: ${calculandoteste}</p>
            <p>Media de MiniTestes: ${calculandoMiniteste}</p>`

    Medias_gerais.innerHTML= `<p>Média Geral: ${mediaduo}</p>
            <p>Média Geral Arredondada: ${mediaArred}</p>`

    if((mediaArred>=16) && (mediaArred<21)){
        alerta.innerHTML=`<p>Muitíssimos parabéns a media chega para dispensar</p>`
        alerta.style.color= "rgb(255, 215, 0)"

    } else if((mediaArred>=10) && (mediaArred<16)){
        alerta.style.color="rgb(0, 255, 0)"
        alerta.innerHTML=`<p>Parabéns a media chega para admitir (Boa sorte no exame!)</p>`
       
    }else if((mediaArred>=0) && (mediaArred<10)){
        alerta.style.color="rgb(231, 93, 93)"
        alerta.innerHTML=`<p>Infelizmente a nota não chega para admitir</p>`
    }else{
        alerta.innerHTML=`<p>Verifique os valores que colocou nas áreas de teste e mini-teste...</p>`
    }
}