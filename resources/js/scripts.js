var itens = [];


$(function(){

	$("#salvar").click(function(){
		
		//JS PURO
		//document.getElementById("nova-atividade-descricao").value
		
		//JQuery
		//$("#nova-atividade-descricao").val();
		
		var atividade = {
			descricao: $("#nova-atividade-descricao").val(),
			data: $("#nova-atividade-data").val(),
			projeto: $("#nova-atividade-projeto").val(),
			subprojeto: $("#nova-atividade-subprojeto").val(),
			grupo: $("#nova-atividade-grupo").val(),
			tipo: $("#nova-atividade-tipo").val()
		};		
		
		itens.push(atividade);
		alert ("Atividade adicionada com sucesso!")
		
	});

  $("#pesquisarBotao").click(function(){
    var formSel = $("#formulario_pesquisa");  
    if(formSel.is(":visible")){
      formSel.slideUp("slow");
    } else {
      formSel.slideDown("slow");
    }
  });
});


/*$(function(){
    //Código das funções Adicionar, Salvar, Editar e Excluir
    $(".btnEditar").bind("click", Editar);
    $(".btnExcluir").bind("click", Excluir);
    $("#btnAdicionar").bind("click", Adicionar);           
 
});

function Adicionar(){
    $("#tblHoras tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='images/disk.png' class='btnSalvar'>
                       <img src='images/delete.png' class='btnExcluir'/></td>"+
        "</tr>");
     
        $(".btnSalvar").bind("click", Salvar);     
        $(".btnExcluir").bind("click", Excluir);
};

function Salvar(){
    var par = $(this).parent().parent(); //tr
    var tdNome = par.children("td:nth-child(1)");
    var tdTelefone = par.children("td:nth-child(2)");
    var tdEmail = par.children("td:nth-child(3)");
    var tdBotoes = par.children("td:nth-child(4)");
 
    tdNome.html(tdNome.children("input[type=text]").val());
    tdTelefone.html(tdTelefone.children("input[type=text]").val());
    tdEmail.html(tdEmail.children("input[type=text]").val());
    tdBotoes.html("<img src='images/delete.png'
           class='btnExcluir'/><img src='images/pencil.png' class='btnEditar'/>");
 
    $(".btnEditar").bind("click", Editar);
    $(".btnExcluir").bind("click", Excluir);
};

function Editar(){
 var par = $(this).parent().parent(); //tr
 var tdNome = par.children("td:nth-child(1)");
 var tdTelefone = par.children("td:nth-child(2)");
 var tdEmail = par.children("td:nth-child(3)");
 var tdBotoes = par.children("td:nth-child(4)");
 
 tdNome.html("<input type='text' id='txtNome' value='"+tdNome.html()+"'/>");
 tdTelefone.html("<input type='text' 
                  id='txtTelefone' value='"+tdTelefone.html()+"'/>");
 tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
 tdBotoes.html("<img src='images/disk.png' class='btnSalvar'/>");
 
 $(".btnSalvar").bind("click", Salvar);
 $(".btnEditar").bind("click", Editar);
 $(".btnExcluir").bind("click", Excluir);
};

function Excluir(){
    var par = $(this).parent().parent(); //tr
    par.remove();
};*/

/*http://www.linhadecodigo.com.br/artigo/3426/editando-e-removendo-linhas-em-uma-tabela-html-com-jquery.aspx*/
