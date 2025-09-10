//escrever a lógica para adicionar os contatos novos 
//na tela após clicar em salvar.
var contador = 0;
var linhaEmEdição = null;
function validar(elemento){    
    
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
       if(linhaEmEdição) {
        atualizarLinha(linhaEmEdição,nome,endereco,telefone,instagram)
        linhaEmEdição = null;
       }else {
        AdicionarNaTela(instagram,nome,endereco,telefone)
       }
   }   
   else {
    alert(camposComProblemas);
   }
}
function AdicionarNaTela(nome, endereco, telefone, instagram){    
    var tabela = document.querySelector('#tabela');    
    var body = tabela.querySelector('#corpoTabela');     
    var linha = document.createElement('tr');
    linha.setAttribute("id","_"+contador);
    linha.setAttribute("onclick","alterarValores(this);");
    var tdNome = document.createElement('td');
    tdNome.classList.add("nome");
    var tdEndereco = document.createElement('td');
    tdEndereco.classList.add("endereco");
    var tdTelefone = document.createElement('td');
    tdTelefone.classList.add("telefone");
    var tdInstagram = document.createElement('td');
    tdInstagram.classList.add("instagram");

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
    contador++;
}

function alterarValores(elemento){
   //pega os campos da tela;
   var campoNome = document.querySelector("#nome");
   var campotelefone = document.querySelector("#telefone");
   var campoendereco = document.querySelector("#endereco");
   var campoinstagram = document.querySelector("#instagram");
   var elementoAtual =  document.querySelector("#elementoUtilizado").value;

   var valorAtualNome = elemento.querySelector(".nome").innerText;
   var valorAtualEndereco = elemento.querySelector(".endereco").innerText;
   var valorAtualTelefone = elemento.querySelector(".telefone").innerText;
   var valorAtualInstagram = elemento.querySelector(".instagram").innerText;
   
   //atribui os valores nos campos
   campoNome.value = valorAtualNome;
   campoendereco.value = valorAtualEndereco;
   campotelefone.value = valorAtualTelefone;
   campoinstagram.value = valorAtualInstagram;

  
   console.log(valorAtualNome)
   console.log(valorAtualEndereco)
   console.log(valorAtualTelefone)
   console.log(valorAtualInstagram) 
   console.log(elementoAtual)

   linhaEmEdição = elemento.id
}


function atualizarLinha(id,nome,endereco,telefone,instagram) {
    let linha = document.getElementById(id)

    linha.querySelector(".nome").innerText = nome;
    linha.querySelector(".endereco").innerText = endereco;
    linha.querySelector(".telefone").innerText = telefone;
    linha.querySelector(".instagram").innerText = instagram;

}
  