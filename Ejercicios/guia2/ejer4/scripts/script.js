function ola()
{
    document.write("ola q ase");
}

window.onload = function Cargar()
{
    var parrafos = document.getElementsByTagName('p');

   
    var num = 1;
    for(var i =0; i<parrafos.length; i++)
    {       

        for(var k=num; k<100; k++)
        {
            if( isPrime(k) == true)
            {
                 
                 parrafos[i].innerHTML= k;
                 num=k+1;
                 break;
            }
        }
        
    }
  
}

function isPrime(n)
{
    for(var i=2;i<n;i++)
    {
        if(n%i==0)
            return false;
    }
    return true;
}