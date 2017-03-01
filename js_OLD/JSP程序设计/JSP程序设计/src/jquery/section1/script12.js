$().ready(function(){
  var $div = $("#father");
  var btn1 = $("#btn1")[0];
  var btn2 = $("#btn2")[0];
  btn1.onclick = function () {
  var new_div = $("<div id='new_div' style='background-color:Red;width:100px;height:20px;margin-top:10px;'>3</div>");
     $div.before(new_div); 
  }
  btn2.onclick = function(){
    var $new_div = $("#new_div");
    $new_div.remove(); 
  }
})