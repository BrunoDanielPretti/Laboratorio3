$(document).ready(function(){

   $("#btnCargar").click(function(){
       localStorage.nombre = $("#txt1").val();
       localStorage.apellido = $("#txt2").val();
       alert("Cargado");
   })
   $("#btnBorrar").click(function(){
       localStorage.removeItem("nombre");
       localStorage.removeItem("apellido");
       alert("Borrado");
   })
   $("#btnMostrar").click(function(){
       if(localStorage.nombre != null && localStorage.apellido != null)
           alert("Nombre: "+localStorage.nombre+"\nApellido: "+localStorage.apellido);
       else
           alert("No Definido");                          
   })


   
})