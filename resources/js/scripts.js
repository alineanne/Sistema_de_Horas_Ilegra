$(function(){

  $("#pesquisarBotao").click(function(){
    var formSel = $("#formulario_pesquisa");  
    if(formSel.is(":visible")){
      formSel.hide("slow");
    } else {
      formSel.show("slow");
    }
  });
  
});