$(document).ready( function(){  //el ready cerra abajo, cuando el documento esta listo usa la funcion

    //enviar datos
    var myObj = {"nombre":"carlos", "edad": 30};
    var myJson = json.stringify(meObj); //comvierte el objeto json a texto

    //recibir datos
    var myJson = {"nombre":"carlos", "edad":30};
    var myObj = JSON.parse(myJson);
    

});