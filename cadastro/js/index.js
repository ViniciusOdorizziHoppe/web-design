//escrever a lógica para adicionar os contatos novos 
//na tela após clicar em salvar.

function validar(){   
   var nome = document.querySelector("#nome").value;
   var telefone = document.querySelector("#telefone").value;
   var endereco = document.querySelector("#endereco").value;
   var instagram = document.querySelector("#instagram").value;
   
   var camposComProblemas = [];
   //validações:
   if(nome === '' || nome === undefined || nome === null){
       camposComProblemas.push("Campo nome não preenchido.") 
   }
   if(telefone === '' || telefone === undefined || telefone === null){
       camposComProblemas.push("Campo telefone não preenchido.") 
   }
   if(endereco === '' || endereco === undefined || endereco === null){
       camposComProblemas.push("Campo endereco não preenchido.") 
   }
   if(instagram === '' || instagram === undefined || instagram === null){
       camposComProblemas.push("Campo instagram não preenchido.") 
   }
   
   if(camposComProblemas.length == 0){
        AdicionarNaTela(nome, endereco,telefone,instagram);
   }   
   else {
    alert(camposComProblemas);
   }
}
function AdicionarNaTela(nome, endereco, telefone, instagram){    
    var tabela = document.querySelector('#tabela');    
    var body = tabela.querySelector('#corpoTabela');     
    var linha = document.createElement('tr');
    var tdNome = document.createElement('td');
    var tdEndereco = document.createElement('td');
    var tdTelefone = document.createElement('td');
    var tdInstagram = document.createElement('td');

    //adicionar os valores dos campos;
    tdEndereco.innerText = endereco;
    tdNome.innerText = nome;
    tdTelefone.innerText = telefone;
    tdInstagram.innerText = instagram;

    linha.appendChild(tdNome);
    linha.appendChild(tdEndereco);
    linha.appendChild(tdTelefone);
    linha.appendChild(tdInstagram);

    body.appendChild(linha);
}