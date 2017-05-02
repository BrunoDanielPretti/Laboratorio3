$(document).ready(function(){
    $("#btnSumar").click(function(){
        var num1 = $("#txtNumero1").val();
        var num2 = $("#txtNumero2").val();

        $("#resultado").html("aca va el gif");

        $.ajax({
            url: "./pagina1.php",
            type: "POST",
            data: {numero1: num1, numero2: num2},
            dataType: "text"
        })  
        .done(function(data){
            $("#resultado").html(data);
            //$("#resultado").text(data); //tambien sirve aca
        })
    });
});