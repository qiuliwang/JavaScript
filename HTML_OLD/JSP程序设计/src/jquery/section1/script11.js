$().ready(function(){
  var $div = $("#father");
  var btn = $("#btn")[0];
  btn.onclick = function () {
  var new_div = $("<div style='background-color:Red;width:100px;height:20px;margin-top:10px;'>3</div>");
     $div.before(new_div); 
  }
})