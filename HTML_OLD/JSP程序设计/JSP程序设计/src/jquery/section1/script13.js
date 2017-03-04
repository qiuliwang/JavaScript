$().ready(function(){
  var $father = $("#father");
  var btn = $("#btn")[0];
  btn.onclick = function () {
     $("#son").clone().appendTo($father);
  }
})