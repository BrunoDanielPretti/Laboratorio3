window.onload = function()
{
    var boton = document.getElementById("btnCalcular");
    boton.onclick = Calcular;

}

function Calcular()
{
    //alert("Hola");
    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    var resultado;
    var operacion = document.getElementsByName("operacion");

    //alert(operacion.length);
    
    for (var i = 0; i < operacion.length; i++)
    {        
        if(operacion[i].checked)
            operacion = operacion[i].value;        
    }
    
    switch (operacion)
    {
        case '+':
            resultado = parseInt(num1)+parseInt(num2);
            break;
        case '-':
            resultado = parseInt(num1)-parseInt(num2);
            break;
        case '*':
            resultado = parseInt(num1)*parseInt(num2);
            break;
        case '/':
            resultado = parseInt(num1)/parseInt(num2);
            break;
    
        default:
            break;
    }

    alert("El resultado es: "+resultado);
    
}