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
   alert(camposComProblemas);   
}