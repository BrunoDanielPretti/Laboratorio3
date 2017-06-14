class Motor{
    potencia: number;
    tipo: string;
    estado: boolean;

    constructor(pPotencia: number, pTipo: string){        
        this.potencia = pPotencia;
        this.tipo = pTipo;
    }

    public encenderMotor(){
        
    }

}

class Accesorio{
    id: number;
    nombre: string;

    constructor(pId: number, pNombre: string){
        this.id = pId;
        this.nombre = pNombre;
    }
}

class Vehiculo{
	private _precioBase: number;
	private _motor: Motor;
	marca: string;
	modelo: string;
	private listaAccessorios: string;

    constructor(pPrecio:number, pMotor:Motor, pMarca:string, pModelo:string){
        this._precioBase = pPrecio;
        this._motor = pMotor;
        this.marca = pMarca;
        this.modelo = pModelo;  
        this.listaAccessorios = "";
    }

    public getPrecioBase(){
        return this._precioBase;
    }
    public getMotor(){
        return this._motor;
    }
    public getListaAccessorios(){
        return this.listaAccessorios;
    }

    public setPrecioBase(pPrecio:number){
        this._precioBase = pPrecio;
    }
    public setMotor(pMotor:Motor){
        this._motor = pMotor;
    }
    public setListaAccessorios(pLista:string){
        this.listaAccessorios = pLista;        
    }

    public getPrecioTotal(){
        return this._precioBase * 1.08;
    }

    public AgregarAccesorios(...pAccesorios: Accesorio[]){
        let miArray:string[] =
        this.listaAccessorios = pAccesorios.join(" ");
    }
}

enum nLargo{
    "corto",
    "mediano",
    "largo"
}
class Camion extends Vehiculo{
    Largo:nLargo;
    cuatroXcuatro:boolean;

    constructor(pPrecio:number, pMotor:Motor, pMarca:string, pModelo:string, pcXc:boolean, pLargo:nLargo){
        super(pPrecio, pMotor, pMarca, pModelo);
        this.Largo = pLargo;
        this.cuatroXcuatro = pcXc;
    }
}

window.onload = function(){
    //alert("ola q ase");
    let villanos:String[]=["Lex Luthor", "Loki", "Duende Verde"];

    let miCamion:Camion = new Camion(100, new Motor(255, "tipoDelMotor"), "Priulo", "leModelo", true, nLargo.corto);
    miCamion.AgregarAccesorios(new Accesorio(1, "linterna"));
    console.log("precio total del Camion: " + miCamion.getPrecioTotal());
    console.log( "Lista de Accesorios: " + miCamion.getListaAccessorios() );
}
