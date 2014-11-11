var itens = [];


$(function(){
  $("#pesquisarBotao").click(function(){
    var formSel = $("#formulario_pesquisa");  
    if(formSel.is(":visible")){
      formSel.slideUp("slow");
    } else {
      formSel.slideDown("slow");
    }
  });
  
});