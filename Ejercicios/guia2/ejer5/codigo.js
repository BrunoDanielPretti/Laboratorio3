window.onload = function()
{
    var boton = document.getElementById("btn");
    boton.onclick = pedirNumero;

}

function pedirNumero()
{    
    var numero;
    do
    {
         numero = prompt("Ingresar Numero", "Numero");

        if( parseInt(numero) > 0)
        {
            alert("El Numero es Positivo");
        }
        else
            alert("El Numero no es positivo, ingrese otro numero");
    }while( numero <= 0)
    
   
}