"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Motor = (function () {
    function Motor(pPotencia, pTipo) {
        this.potencia = pPotencia;
        this.tipo = pTipo;
    }
    Motor.prototype.encenderMotor = function () {
    };
    return Motor;
}());
var Accesorio = (function () {
    function Accesorio(pId, pNombre) {
        this.id = pId;
        this.nombre = pNombre;
    }
    return Accesorio;
}());
var Vehiculo = (function () {
    function Vehiculo(pPrecio, pMotor, pMarca, pModelo) {
        this._precioBase = pPrecio;
        this._motor = pMotor;
        this.marca = pMarca;
        this.modelo = pModelo;
        this.listaAccessorios = "";
    }
    Vehiculo.prototype.getPrecioBase = function () {
        return this._precioBase;
    };
    Vehiculo.prototype.getMotor = function () {
        return this._motor;
    };
    Vehiculo.prototype.getListaAccessorios = function () {
        return this.listaAccessorios;
    };
    Vehiculo.prototype.setPrecioBase = function (pPrecio) {
        this._precioBase = pPrecio;
    };
    Vehiculo.prototype.setMotor = function (pMotor) {
        this._motor = pMotor;
    };
    Vehiculo.prototype.setListaAccessorios = function (pLista) {
        this.listaAccessorios = pLista;
    };
    Vehiculo.prototype.getPrecioTotal = function () {
        return this._precioBase * 1.08;
    };
    Vehiculo.prototype.AgregarAccesorios = function () {
        var pAccesorios = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pAccesorios[_i] = arguments[_i];
        }
        var miArray = this.listaAccessorios = pAccesorios.join(" ");
    };
    return Vehiculo;
}());
var nLargo;
(function (nLargo) {
    nLargo[nLargo["corto"] = 0] = "corto";
    nLargo[nLargo["mediano"] = 1] = "mediano";
    nLargo[nLargo["largo"] = 2] = "largo";
})(nLargo || (nLargo = {}));
var Camion = (function (_super) {
    __extends(Camion, _super);
    function Camion(pPrecio, pMotor, pMarca, pModelo, pcXc, pLargo) {
        var _this = _super.call(this, pPrecio, pMotor, pMarca, pModelo) || this;
        _this.Largo = pLargo;
        _this.cuatroXcuatro = pcXc;
        return _this;
    }
    return Camion;
}(Vehiculo));
window.onload = function () {
    //alert("ola q ase");
    var villanos = ["Lex Luthor", "Loki", "Duende Verde"];
    var miCamion = new Camion(100, new Motor(255, "tipoDelMotor"), "Priulo", "leModelo", true, nLargo.corto);
    miCamion.AgregarAccesorios(new Accesorio(1, "linterna"));
    console.log("precio total del Camion: " + miCamion.getPrecioTotal());
    console.log("Lista de Accesorios: " + miCamion.getListaAccessorios());
};
