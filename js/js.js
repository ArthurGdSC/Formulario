function guardarFormulario() {
    var formsClient = new Object();

    formsClient.nome = document.getElementById('nome').value;
    formsClient.sobrenome = document.getElementById('sobrenome').value
    formsClient.idade = document.getElementById('idade').value;
    formsClient.cpf = document.getElementById('cpf').value
    formsClient.telefone = document.getElementById('telefone').value;
    formsClient.nacionalidade = document.getElementById('nacionalidade').value

    var jsonForms = JSON.stringify(formsClient);

    console.log(formsClient.valueOf())
    document.getElementById("dados").innerHTML = '<p>Nome: ' + formsClient.nome    + '<br><br>Sobrenome: ' + formsClient.sobrenome + '<br><br>Idade: ' + formsClient.idade
    + '<br><br>CPF: ' + formsClient.cpf + '<br><br>Telefone: ' + formsClient.telefone + '<br><br>Nacionalidade: ' + formsClient.nacionalidade + '</p>';
}

function imprimir() {
    var imprimirDiv = document.getElementById('dados').innerHTML
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = imprimirDiv;
    window.print();
    document.body.innerHTML = originalContent
}

