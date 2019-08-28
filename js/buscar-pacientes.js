var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes1");

    xhr.addEventListener("load", function(){

        if( xhr.status == "200"){

            var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        //puxa a função que adiciona os pacientes na tabela
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            adicionaPaciente(paciente);
            var erroAj = document.querySelector("#erro-ajax");
            erroAj.classList.add("invisivel"); 
         }  

        }else{
            console.log(xhr.status);
            console.log(xhr.response);
            var erroAj = document.querySelector("#erro-ajax");
            erroAj.classList.remove("invisivel");
        }

        
    });
    xhr.send();

});
