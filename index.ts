// Clases con clases
// ArtículoDesafíoLinksDiscord
// Para este desafío, te proponemos que pases este test. Para eso, tenés que crear tres clases que se relacionen entre sí de esta forma:
// 1- Edificio, que debe tener:
// un constructor que reciba un array de Piso y lo guarde en una propiedad.
// un método addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento) que reciba un Departamento y lo ubique en el piso con 
//el nombre indicado, si no existe un piso con ese nombre debe mostrar un error.
// un método getDepartamentosByPiso(nombreDePiso:string) que devuelva todos los Departamento(s) de un piso.
// 2- Piso, que debe tener:
// un constructor debe recibir el nombre de ese piso con formato de texto. Por ejemplo: "primer piso" y guardarlo en una propiedad nombre 
//para poder usarla posteriormente.
// un método pushDepartamento y getDepartamentos para agregar departamentos y obtener el listado completo de los departamentos de ese piso 
//(ambos usan una propiedad interna departamentos para guardar y leer).
// 3- Departamento:
// el constructor debe recibir el nombre de ese departamento con formato de texto. Por ejemplo: "mi depto".
// debe tener un método getName() que devuelva el nombre del departamento.
// Importante: recordá que las palabras escritas con la inicial en mayúsculas indican que se trata de una clase (Edificio, Piso, Departamento)

class Departamento {
  nombreDepartamento: string
  constructor (nombreDpto: string) {
    this.nombreDepartamento = nombreDpto;
  }
  getName () {
  return this.nombreDepartamento;
  }}

class Edificio {
  pisos: Piso [];
  constructor (piso: Piso []) {
    this.pisos = piso; 
  }
addDepartamentoToPiso (nombreDePiso: string, departamento: Departamento) {
 const pisoEncontrado = this.pisos.find((p)=>p.nombre == nombreDePiso);
 return pisoEncontrado.pushDepartamento(departamento); 
}
getDepartamentosByPiso (nombreDePiso: string) {
  const pisoEncontrado = this.pisos.find((p)=>p.nombre == nombreDePiso);
  return pisoEncontrado.getDepartamentos();
}}

class Piso {
  nombre: string;
  deptos: Departamento [];
  constructor (nombrePiso: string) {
    this.nombre = nombrePiso;
    this.deptos = [];
  }
  pushDepartamento (depto: Departamento) {
    this.deptos.push(depto);
  }
  getDepartamentos () {
    return this.deptos 
  }}








// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();