//Variables
//Contenedor de informacion

//ES6
//Let - const
//var - Hoisting
var CI= 1701763065 // Int
let modulo="Mis ordenes" //String
let sueldo= 1500 // String
let numOrden= 127
let status = true
let tipoPago= 'E' //Char
let precioFinal = 155.99 //float
let tipoCuenta // Undefined

// Tipos de datos -Compuestos
let ordenes = ["balon" ,"camiseta","zapatos"] //array
let detalleOrden={
     //Objeto
     id: 1,
     estado:true,
     precio: 150.99,
     items:["Pc","Monitor","Teclado"]
}

//Tarea desafio Json vs Objeto

console.log(ordenes)

//Strings

let nombreCompleto="Mario Endara"
nombreCompleto.length // sirve para validar el password //Esto es una propiedad los metodos van en parentesis
nombreCompleto.toUpperCase() // Sirve para guardar en Base de datos
nombreCompleto.toLocaleLowerCase() //Guardar en BBD
nombreCompleto.trim // remueve todos los espacios en blanco
nombreCompleto.includes("Mario") //validar caracteres existentes

// ES6 - Template strings

console.log("hola"+nombreCompleto)
console.log(`hola ${nombreCompleto}`) //forma antigua

//Numbers
let cuotas = "36"

console.log(cuotas+1) //"361"
// ES6
console.log(+cuotas+1) //37
// Orden de precedencia
console.log(4 * 3 ** 2) //36

//bOOLEANOS
let saldoCuenta=1000
let saldoTrjeta="1000"
//Comparación del valor
console.log(saldoCuenta== saldoTrjeta)
//ES6 - Comparacion del valor y tipo "Comparacion estricta"
console.log(saldoCuenta=== saldoTrjeta)

//Condicionales
let carritoCompras = []
if(carritoCompras.length===0){
    console.log("Carrito vacio")

}else{
    console.log("Carrito lleno")
}

//ES6- Operador ternario

carritoCompras.lenght === 0 ? log("Carrito vacío") : console.log("Carrito lleno") // forma actual


// Funciones
//declarada

function validarUsuario() {
    console.log("Usiario validado")
}

// funcion expresada
const validarRol = function(){
    console.log("Rol validado")
}
// ES6 - Función de flecha

const validarMail = ()=>{
    console.log("Mail valido")
}


