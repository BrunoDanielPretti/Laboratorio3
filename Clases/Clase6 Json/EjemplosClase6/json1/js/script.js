$(document).ready(function(){

    $("#login").submit(function(e){

        e.preventDefault(); //Evite las funciones por default del submit para q no se refresque la pagina

        $.ajax({            
            url:"login.php",
            type:"GET",
            data:{user:$("#txtUsuario").val()},
            dataType:"JSON",
            success: function(data){                

                $("#respuesta").text("Nombre: " + data.Nombre + " " + data.Apellido + " Edad: " + data.Edad );

            }

        })
      
      //  return false;

    });  


});