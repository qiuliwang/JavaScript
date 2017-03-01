$().ready(function(){
  var $a = $("a");
  var btn = $("#btn")[0];
  btn.onclick = function () {
     $a.wrap("<li style='background-color:red;'></li>");
  }
})