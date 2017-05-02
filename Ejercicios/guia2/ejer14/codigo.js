window.onload = function()
{
    var boton = document.getElementById("btn");
    boton.onclick = Validar;
}

function Validar()
{
    if( !ValidarCampoVacio(document.getElementById("txtNombre").value) )        
        document.getElementById("txtNombre").style = "background-color: #ff0000";
    else    
        document.getElementById("txtNombre").style = "background-color: #ffffff";

    if( !ValidarCampoVacio(document.getElementById("txtApellido").value) )    
        document.getElementById("txtApellido").style = "background-color: #ff0000";
    else
        document.getElementById("txtApellido").style = "background-color: #ffffff";

    if( !EsUnNumero(document.getElementById("txtDni").value) )
        document.getElementById("txtDni").style = "background-color: #ff0000";
    else
        document.getElementById("txtDni").style = "background-color: #ffffff";

    var txtSexo = document.getElementById("txtSexo");    

    if(txtSexo.value != 'm' && txtSexo.value != 'f')
        txtSexo.style = "background-color: #ff0000";
    else
        txtSexo.style = "background-color: #ffffff";

}

function ValidarCampoVacio(campo)
{
    if(campo == '')
        return false;
    else
        return true;    
}

function EsUnNumero(campo)
{
    if( isNaN(campo) || campo == '' )
        return false;
    else   
        return true; 
}