$().ready(function(){
  var $ul = $("ul");
  var btn = $("#btn")[0];
  btn.onclick = function(){
    var $li_5 = $("<li style='background:red;width:100px;height:20px'>Ö£ê»Îå</li>");
   $ul.append($li_5);
  }
})