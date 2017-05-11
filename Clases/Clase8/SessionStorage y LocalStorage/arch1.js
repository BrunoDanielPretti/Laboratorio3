if(typeof(Storage) !== "undefined")  //Si puedo usar LocalStorage y SessionStorage
{
    localStorage.setItem("autor", "Mariano");
    //localStorage.autor = "Mariano"; //Hace lo mismo de arriba
    var vAutor = localStorage.getItem("autor");
    //var vAutor = localStorage.autor;

    localStorage.removeItem("autor");

}
else
{
    alert("no esta instalado");
}