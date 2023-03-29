$(document).ready(function () {
    var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
    });

    $('#login').submit(function () {
        if (($('#user').val() != "") && ($('#pass').val() != "")) {
            var datos = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "controlador/login.php",
                data: datos,
                success: function (r) {
                    console.log(r);
                    var jsonData = JSON.parse(r);
                    if (jsonData.status == 1) {
                        window.location.href = "mismascotas.php";
                    } else if (jsonData.status == 0) {
                        Toast.fire({
                            icon: 'info',
                            title: 'Datos Incorrectos'
                        });
                    }
                }
            });
        } else {
            alert('campos vacíos');
        }
        return false;
    });
});