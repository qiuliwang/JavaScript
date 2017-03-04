$().ready(function () {
    var $father = $("#father");
    var btn = $("#btn")[0];
    btn.onclick = function () {
        $("#son").clone().appendTo($father);
    }
    var btn1 = $("#button")[0];
    btn1.onclick = function () {
        $("#son").clone(true).appendTo($father);
    }

    $("#son").click(function () {
        alert("hello");
    })

})
