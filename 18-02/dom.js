//variaveis
const nome = document.getElementById("nome")
const cidade = document.getElementById("cidade")
const email = document.getElementById("email")

const titulo = document.getElementById("titulo")
const subTitulo =document.getElementById("subtitulo")
const txtEmail = document.getElementById("txtEmail")

function mudar(event) {
    event.preventDefault();
    

//validação de formulario
if( nome.value === "" || cidade.value === "" || email.value === ""){
    alert("preencha os campos")
    return false
}


//imprir na tela 
    titulo.innerHTML = nome.value;
    subTitulo.innerHTML = cidade.value
    txtEmail.innerHTML = email.value

// limpar os campos 
nome.value = ""
cidade.value=""
email.value = ""



}


function mudarCor(){
    if(document.body.style.backgroundColor === "purple"){
        document.body.style.backgroundColor = "";
     } else {
         document.body.style.backgroundColor = "purple"
     }

}


