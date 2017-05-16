$(document).ready(function(){
    $("#btnOtro").click(function(){
        //e.preventDefault();
        
        var email =    $("#inputEmail").val();
        var password = $("#inputPassword").val();
        var datosLogin= {email: email, password: password};
        
        datosLogin = JSON.stringify(datosLogin);
        //alert("ola q ase");
        
        $.ajax({
            url: "http://localhost:1337/login",
            type: "POST",
            data: datosLogin,
            dataType: "JSON"
        })
        .done(function(data){
            alert(data.autentificador);
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("Error " + peticion.status + ' ' + errorThrown + ' ' + textStatus);
        });     
        

        /*
        var responseBody = { autentificador:"si",
                             preferencias:{color: "blue", font:"verdana"}
                           };
                           */
        window.location.replace("index.html");
        
    });


});