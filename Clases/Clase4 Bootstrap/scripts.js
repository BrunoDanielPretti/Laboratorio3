function asd()
{
    var req = new XMLHttpRequest();
    req.open("get", "html://blablabla", true);

    req.onreadystatechange = recibir; //llama a la funcion;
    

    req.send();


}

function recibir()
    {
        if(req.readyState == 4) //si ya se cargo la informacion
        {
            //req.responseText; //la informacion q nos trajo
            midivhtml.innerhtml = req.responseText;
        }
        else
        {
            midivhtml.innerhtml = "cargando";
        }                
    }    
/*
request type
0   no salios
1   Open
2   Llega al servidor
3   Esta cargando
4   done, ya esta cargado
*/
