$().ready(function(){
     var $products = $(".products:gt(5)");
     $products.hide(); 
     var btn = $("#btn")[0]; 
     btn.onclick = function(){ 
        if($products.is(":visible")){ 
            $products.hide(1000); 
            btn.value="��ʾȫ����Ʒ";
         }else{ 
          $products.show(1000); 
           btn.value="���ز�����Ʒ"; 
       } 
    } 
})