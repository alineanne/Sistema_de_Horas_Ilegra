var itens = [];

function gerarTabela(){

	$("#tblHoras tbody").html("");

	var tbody = '';
						
	for (var i=0, max=itens.length; i<max; i++){
		tbody += 
					'<tr>' +
					'<td>'+itens[i].data+'</td>'+
					'<td>'+itens[i].horainicio+'</td>'+
					'<td>'+itens[i].horafim+'</td>'+
					'<td>'+itens[i].projeto+'</td>'+
					'<td>'+itens[i].subprojeto+'</td>'+
					'<td>'+itens[i].grupo+'</td>'+
					'<td>'+itens[i].tipo+'</td>'+
					'<td>'+itens[i].descricao+'</td>'+
					'<td>'+itens[i].totalhorasatividades+'</td>'+
					'<td>'+
						'<img src="resources/imagens/editar.png" class="editar"title="Editar"  id="e-'+i+'">'+
						'<img src="resources/imagens/deletar.png" class="deletar"title="Deletar" id="r-'+i+'">'+
						'<img src="resources/imagens/duplicar.png" class="duplicar"title="Duplicar">'+					
					'</td>';				
					
					/**'<tr>'	+
					'<td id="horas" colspan=8>'+"Total de Horas:"+'</td>'+
					'<td colspan=2>'+"48:00"+'</td>'+	
					'</tr>'+
					'<tr>'+
					'<td id="horas" colspan=8>'+"Média de Horas:"+'</td>'+
					'<td colspan=2>'+"17:00"+'</td>'+	
					'</tr>'+	*/
	}				
						
	$("#tblHoras tbody").html(tbody);	
	carregarEventos();	
}

function carregarEventos(){

}

$(function(){

	gerarTabela();
	
	$("#salvar").click(function(){
		
		//JS PURO
		//document.getElementById("nova-atividade-descricao").value
		
		//JQuery
		//$("#nova-atividade-descricao").val();
		
		var atividade = {
			data: $("#nova-atividade-data").val(),
			horainicio: $("#nova-atividade-horainicio").val(),
			horafim: $("#nova-atividade-horafim").val(),
			projeto: $("#nova-atividade-projeto").val(),
			subprojeto: $("#nova-atividade-subprojeto").val(),
			grupo: $("#nova-atividade-grupo").val(),
			tipo: $("#nova-atividade-tipo").val(),
			descricao: $("#nova-atividade-descricao").val(),
			totalhorasatividades: $("#totalhorasatividades").val()
		};		
		
		itens.push(atividade);
		gerarTabela();
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
