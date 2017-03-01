$().ready(function () {
          $("img").hover(function(){
              $(this).animate({ width: "300px", height: "200px" }, 1000);
            },function(){
              $(this).animate({ width: "150px", height: "100px" }, 1000);
             }
       );
  });