$(function () {
    $('#btn').click(function () {
      //Ϊ���о���id���Ե�Ԫ��������ʽ,����Ч��
      //$('div[id]').show(3000);
      //Ϊ�������Ծ���title��titleֵΪt2div���ö���Ч��
      $('div[title=t2]').css({color:"red",backgroundColor:"#bbffaa"});
      //Ϊ�������Ծ���title��titleֵ��Ϊt2div���ö���Ч��
       //$('div[title!=t2]').show(3000);

       //����ֵ��t��ͷ
       //$('div[title^=t]').show(3000);

       //����ֵ��2����
      //$('div[title$=2]').show(3000);
      //����ֵ����2
      //$('div[id*=2]').show(1000);

      //idֵ��d��ʼ��titleֵ��3����
      // $('div[id^=d][title$=3]').show(1000);
    });
 })