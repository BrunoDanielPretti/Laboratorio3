$(document).ready(function()
{
    $("#get_btn").click(function()
    {
        $.ajax({
            url: './misJson.php',
            type: 'POST',
            dataType: 'JSON',  //data = JSON.parse(data);            
        })
        .done(function(data){
            var cosas = "<ul>";

                for(var i=0; i<data.length; i++)
                {
                    //var num =  parseInt( (Math.random()*150+1) ) ;
                    //var fotito = "../../../Resources/emerald/animated/"+ num +".gif";
                    var informacion = "<li>";                    
                    informacion += " - " + data[i].id;
                    informacion += " - " + data[i].first_name;
                    informacion += " - " + data[i].last_name;
                    informacion += "<img class='img-rounded' src='" + data[i].foto + "' width='70' />";
                    //informacion += "<img class='img-rounded' src='" + fotito + "' width='70' />";
                    //
                    informacion +=  "</li>";


                    cosas += informacion;
                }

                cosas += "</ul>";

                $("#salida").html(cosas);
        })                            //FIN .done
        .fail(function(peticion, textStatus, errorThrown){
            alert("Error " + peticion.status + ' ' + errorThrown);
        })                            //FIN .fail
        .always(function(){
            alert("aca no se q poner, es para probar el always");
        })  
                                     //FIN .always
    }) //FIN de get_btn.click
}) //FIN de document.ready

