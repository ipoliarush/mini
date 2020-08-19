function sendAjaxForm(e, t) {
    $.ajax({
        url: t,
        type: "POST",
        dataType: "json",
        data: $("#" + e).serialize(),
        success: function (e) {
            e.success && swal({ title: "Все отлично", text: "Ваше сообщение отправлено!", icon: "success", buttons: !1, timer: 4e3 });
        },
        error: function (e) {
            swal({ title: "Ошибка", text: "Ваше сообщение не отправлено!", icon: "error", buttons: !1, timer: 4e3 });
        },
    });
}
$(document).ready(function () {
    var e, t, n, m;
    $("#btn").click(function () {
        if (((m = $("#ctel").val().length), (e = $("#cname").val().length), (t = $("#cemail").val().length), (n = $("#cmessage").val().length), 0 != e && 0 != t && 0 != n && 0 == m)) return sendAjaxForm("cform", "./code/hhtr.php"), !1;
    });
});
