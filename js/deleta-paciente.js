var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    //console.log(event.target);
    //event.target.parentNode.remove();
    event.target.parentNode.classList.add("fade-out");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
})


//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        console.log("Fui clicado com um duplo click");
//        paciente.remove();
//    });
//});