$().ready(function(){
     var $products = $(".products:gt(5)");
     $products.hide(); 
     var btn = $("#btn")[0]; 
     btn.onclick = function(){ 
        if($products.is(":visible")){ 
            $products.hide(1000); 
            btn.value="显示全部商品";
         }else{ 
          $products.show(1000); 
           btn.value="隐藏部分商品"; 
       } 
    } 
})