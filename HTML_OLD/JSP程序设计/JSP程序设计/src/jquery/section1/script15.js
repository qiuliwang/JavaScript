$().ready(function(){

  var btn = $("#btn")[0];
  btn.onclick = function () {
     var div_title = $("#div").attr("title");
     alert(div_title);
  }

 var btn2 = $("#btn2")[0];
  btn2.onclick = function () {
      $("#div").attr("title","уехЩ");
     var div_title = $("#div").attr("title");
     alert(div_title);
  }
})