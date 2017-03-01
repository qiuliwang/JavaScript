$().ready(function () {
    $("#single").val("选择3号");
    $("#multiple").val(["选择2号", "选择5号"]);
    $(":checkbox").val(["多选2", "多选4"]);
    $(":radio").val(["单选2"]);
    $("#text").text("单选下拉框“选择3号”被选中\n多选下拉框“选择2号 选择5号”被选中\n多选框“多选2 多选4”被选中\n单选框“单选1”被选中")
    var s = '';
    var t = '';
    $("#single").change(function () {
        t = $("#text").text();
        $("#text").text(t+"\n单选下拉框“" + $(this).val() + "”被选中");
    });
    $("#multiple").change(function () {
        t = $("#text").text();
        $("#text").text(t+"\n多选下拉框“" + $(this).val() + "”被选中");
    });
    $(":radio").change(function () {
        t = $("#text").text();
        $("#text").text(t+"\n单选框“" + $(this).val() + "”被选中");
    });
    $(":checkbox").change(function () {
        t = $("#text").text();
        s = '';
        $('input[name="checkbox"]:checked').each(function () {
            s += $(this).val() + ' ';
        });
        $("#text").text(t+"\n单选框“" + s + "”被选中");
    });
});