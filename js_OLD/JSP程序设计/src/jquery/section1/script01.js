$().ready(function () {
    $(".grayTips").each(function () {
        var oldVal = $.trim($(this).val());
        $(this).css({ "color": "#888" });
        $(this).focus(function () {
            if ($(this).val() != oldVal) {
                $(this).css({ "color": "#000" });
            }
            else {
                $(this).val("").css({ "color": "#888" });
            }
        });
        $(this).blur(function () {
            if ($(this).val() == "") {
                $(this).val(oldVal).css({ "color": "#888" });
            }
        });
        $(this).keydown(function () {
            $(this).css({ "color": "#000" });
        });
    });
});