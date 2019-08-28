var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erro = validaPaciente(paciente);

    if (erro.length > 0) {
        exibeMensagemDeErro(erro);
        return;
    }

   adicionaPaciente(paciente);

    // limpa os dados do formulario
    form.reset();

    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
});

function adicionaPaciente(paciente){

    var pacienteTr = montaTr(paciente);

    // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    // adiciona como ultimo elemento
    tabela.appendChild(pacienteTr);
}



function exibeMensagemDeErro(erros){

    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
        
    };


function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
 //   pacienteTr.addEventListener("dblclick", function(){
 //       pacienteTr.remove();
 //   });

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {
    
    var erros = [];

    if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco") ;
    
    if (!validaPeso(paciente.peso)) erros.push("O Peso é Inválido");
    
    if (!validaAltura(paciente.altura)) erros.push("Altura Inválida");
    
    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

    return erros;
}

