const apagarBtn = document.getElementById("apagar")

apagarBtn.addEventListener("click" , function(){

//limpa todos os valores 
localStorage.clear();

//limpa as lista de interface
listaValores.innerHTML = ""

})