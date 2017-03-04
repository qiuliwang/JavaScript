$(function () {
    $('#btn').click(function () {
      //为所有具有id属性的元素设置样式,动画效果
      //$('div[id]').show(3000);
      //为所有属性具有title切title值为t2div设置动画效果
      $('div[title=t2]').css({color:"red",backgroundColor:"#bbffaa"});
      //为所有属性具有title切title值不为t2div设置动画效果
       //$('div[title!=t2]').show(3000);

       //属性值以t开头
       //$('div[title^=t]').show(3000);

       //属性值以2结束
      //$('div[title$=2]').show(3000);
      //属性值包含2
      //$('div[id*=2]').show(1000);

      //id值以d开始，title值以3结束
      // $('div[id^=d][title$=3]').show(1000);
    });
 })