$().ready(function () {
    $("#single").val("ѡ��3��");
    $("#multiple").val(["ѡ��2��", "ѡ��5��"]);
    $(":checkbox").val(["��ѡ2", "��ѡ4"]);
    $(":radio").val(["��ѡ2"]);
    $("#text").text("��ѡ������ѡ��3�š���ѡ��\n��ѡ������ѡ��2�� ѡ��5�š���ѡ��\n��ѡ�򡰶�ѡ2 ��ѡ4����ѡ��\n��ѡ�򡰵�ѡ1����ѡ��")
    var s = '';
    var t = '';
    $("#single").change(function () {
        t = $("#text").text();
        $("#text").text(t+"\n��ѡ������" + $(this).val() + "����ѡ��");
    });
    $("#multiple").change(function () {
        t = $("#text").text();
        $("#text").text(t+"\n��ѡ������" + $(this).val() + "����ѡ��");
    });
    $(":radio").change(function () {
        t = $("#text").text();
        $("#text").text(t+"\n��ѡ��" + $(this).val() + "����ѡ��");
    });
    $(":checkbox").change(function () {
        t = $("#text").text();
        s = '';
        $('input[name="checkbox"]:checked').each(function () {
            s += $(this).val() + ' ';
        });
        $("#text").text(t+"\n��ѡ��" + s + "����ѡ��");
    });
});