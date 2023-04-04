///////////////funcion fecha y la llamada a la funcion//////////////////////////////////////////////
const fecha = () => {
    const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Nombiembre','Diciembre'];
    const date = new Date();
      const dia= date.getDate();
      const mes = date.getMonth();
      const anio = date.getFullYear();
      const hora = date.getHours();
      let minutos = date.getMinutes();
      let segundos=date.getSeconds();
      if(segundos <10 && segundos>=0){
        segundos="0"+segundos;
      }
      if(minutos<10  && minutos >= 0){
        minutos="0"+ minutos;
      }
      
      const reloj = document.getElementById('fecha');
      reloj.innerHTML = `${dia} ${meses[mes]} ${anio} ${hora}:${minutos}:${segundos}`;
      const horaEnvio = document.getElementById('hora');
      horaEnvio.value = `${dia} ${meses[mes]} ${anio} ${hora}:${minutos}:${segundos}`;

      
  };
  
  setInterval("fecha()",1000)

  //////////////////////////IMAGEN QUE ROTA CADA 4 SEGUNDOS////////////////////////////

  
  
  /*function rotarImagenes(){
    const imagenes=['ImagenesProyecto2/joanapastrana.jpg',
                'ImagenesProyecto2/Katie.jpg',
                 'ImagenesProyecto2/amandaSerrano.jpg'];
  const imagen= document.getElementById('public');


    for(i=0;i<imagenes.length;i++){
    
    
     
    
    imagen.src=imagenes[i];
    
    
    }
  }
  setInterval("rotarImagenes()",4000);*/


  //////////////////////////RECARGAR IMAGENES/////////////////////////////////////////////



  

  function recargar_imagen() {
    /* Un elemento por imagen de fondo deseado */
    let fondos = ['ImagenesProyecto2/joanapastrana.jpg',
    'ImagenesProyecto2/Katie.jpg',
     'ImagenesProyecto2/amandaSerrano.jpg'];
    /* Cambio de imagen de fondo asegurando que no se repetirá el anterior */

    let indice, anterior=-1;
    do {
         indice = Math.floor(Math.random() * fondos.length);
    } while ( indice == anterior);
      anterior = indice;
      
    
    imagen.src = fondos[indice];
}

    let imagen = document.getElementById("public");
    
// Establecemos el temporizador a 5 segundos
setInterval("recargar_imagen()", 2000);

///////////////////////////////////////formulario Validacion/////////////////

function asignarCampo(campo,valor){
  document.getElementById(campo).innerHTML=valor;
}
function noOk(elemento){
  elemento.focus();
  elemento.className="error";
  return false;

}

document.getElementById('hora').innerHTML=fecha();
document.getElementById("enviar").addEventListener('click',validarFormulario,false);

function validarFormulario(validarCampos){
  if(contadorIntentos() && valNombre() && valApellido() && valEdad() && valNIF() && valEmail()  && valProvincia()   && valNacimiento() && valTelefono() && confirmarEnvio()){
    return true;
  }else{
    validarCampos.preventDefault();
    return false;
  }
}

function valNombre(){

  let elemento=document.getElementById('nombre');
  elemento.className="";
  if(elemento.value==""){
    asignarCampo("errores", "El campo  Nombre no puede estar vacio");
    elemento.focus();
    elemento.className="error";
    return false;
  }else{
    return true;
  }
}
function valApellido(){
  let elemento=document.getElementById("apellidos");
  elemento.className="";
  if(elemento.value==""){
    asignarCampo("errores", "El campoEdad no puede estar vacio");
    elemento.focus();
    elemento.className="error";
    return false;
  }else{
    return true;
  }
}

///////////////////////////Revisar campo edad
function valEdad(){
  let elemento=document.getElementById("edad");
  elemento.className="";
  if(elemento.value=="" || isNaN(elemento.value)){
    asignarCampo("errores", "El campo Edad no puede estar vacio y debe ser un numero");
    elemento.focus();
    elemento.className="error";
    return false;
  }else if(elemento.value < 14){
    asignarCampo("errores", "Debe tener al menos 14 años para poder estar en nuestra base de datos y recibir nuestra revista mensual")
    elemento.focus();
    elemento.className="error";
    return false;
  }else{
    return true;
  }
}

function valNIF(){
  let patron=/^\d{8}-[A-Z]{1}$/;
  let elemento=document.getElementById("nif");
  elemento.className="";
  if(patron.test(elemento.value)){
    elemento.className="";
    return true;
  }else{
    asignarCampo("errores","El NIF debe estar compuesto por 8 digitos un guion y una letra mayuscula");
    elemento.focus();
    elemento.className="error";
    return false;
  }
}
function valEmail(){
  let patron=/^[a-zA-Z0-9.-]+@[a-z-A-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let elemento= document.getElementById("email");
  elemento.className="";
  if(patron.test(elemento.value)){
    elemento.className="";
    return true;
  }else{
    asignarCampo("errores", "El Email no es correcto, debe tener una @ en medio y un .com .net etc al final");
    elemento.focus();
    elemento.className=("error");
    return false;
  }
}
function valProvincia(){
  let elemento=document.getElementById("provincia");
  elemento.className="";
  if(elemento.selectedIndex==0){
    asignarCampo("errores","Debe elegir una provincia");
    elemento.className=("error");
    elemento.focus();
    return false;
  }else{
    return true;
  }
}
function valNacimiento(){
  let patron= /^\d{2}-\d{2}-\d{4}$/;
  let patron2=/^\d{2}\/\d{2}\/\d{4}$/;
  let elemento=document.getElementById("fechaf");
  elemento.className="";
  if(patron.test(elemento.value) || patron2.test(elemento.value)){
    return true;
  }else{
    asignarCampo("errores", "La fecha no es correcta. Formato: dd/mm/aaaa o dd-mm-aaaa");
    elemento.className=("error");
    elemento.focus();
    return false;
  }
  
}
function valTelefono(){
  let patron=/^\d{9}$/;
  let elemento=document.getElementById("telefono");
  elemento.className="";
  if(patron.test(elemento.value)){
    return true
  }else{
    asignarCampo("errores", "El telefono lo formaran 9 digitos ");
    elemento.focus();
    elemento.className=("error");
    return false;
  }
}
function contadorIntentos(){
  return true;
}

function confirmarEnvio(){
  asignarCampo("errores","");
  return confirm("¿Desea enviar el formulario?");
}







 