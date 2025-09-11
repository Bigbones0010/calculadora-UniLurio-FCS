let vistoMenu = document.getElementById("visto_menu")

function tirar_colocar_menu(){
    if(vistoMenu.style.display== "none"){
        vistoMenu.style.display= "block"
    }else{
        vistoMenu.style.display= "none"
    }
}


function calculadora (){
    let teste1= document.getElementById("teste1")
    let teste2= document.getElementById("teste2")
    let mini_teste1= document.getElementById("mini_teste1")
    let mini_teste2= document.getElementById("mini_teste2")

    let tesTe1 = Number(teste1.value)
    let tesTe2 = Number(teste2.value)
    let miniTeste1= Number(mini_teste1.value)
    let miniTeste2 = Number(mini_teste2.value)

    var calculandoteste= ((tesTe1+tesTe2)/2) * 0.75
    var calculandoMiniteste = ((miniTeste1+miniTeste2)/2)*0.25

    var media = calculandoteste+calculandoMiniteste

    alert (media)
}