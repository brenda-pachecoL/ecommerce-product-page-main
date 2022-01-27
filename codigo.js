function myFuction(smallImg){
    var fullImg=document.getElementById("imageBox");
    fullImg.src=smallImg.src;
}

//carrousel
/*var imagenes = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"],
    cont = 0;

function carrouselFuntion(carrousel){
    carrousel.addEventListener("click", e =>  {
        let atras = carrousel.querySelector(".atras"),
            adelante = carrousel.querySelector(".adelante"),
            img = carrousel.querySelector("img-carrousel"),
            tgt = e.target;



        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont --;
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length -1;   
            }
        }else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont ++;
            }else{
                img.src = imagenes[0];
                cont = 0;   
            }
        }
    });
}

document.addEventListener('DOMContentLoaded',() =>{
    let contenedor = document.querySelector(".carrousel");

    carrouselFuntion(contenedor);
});
//otra funcion que no funciono jajaj
let imagenes = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
let contador = 0;

function carrousel(direccion){
let direccion1 = direccion;

if(direccion1=='atras'){
  if(contador==0){
    document.getElementById('imagen').src= imagenes[imagenes.length-1];
    contador++;
  }else if (contador<imagenes.length-1) {
    document.getElementById('imagen').src= imagenes[imagenes.length-1-contador];
    contador++;

  }else {
    document.getElementById('imagen').src= imagenes[0];
    contador=0;
  }
}

if(direccion1=='adelante'){
  if(contador==0){
    document.getElementById('imagen').src= imagenes[0];
    contador++;
  }else if (contador<imagenes.length-1) {
    document.getElementById('imagen').src= imagenes[contador];
    contador++;

  }else {
    document.getElementById('imagen').src= imagenes[imagenes.length-1];
    contador=0;
  }
}

}*/

var imagenes = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
var imagenActual = 0;

document.getElementById("anterior").addEventListener("click",cambiarImagen);
document.getElementById("siguiente").addEventListener("click",cambiarImagen);

function cambiarImagen (){
    var boton = this.id;
    if(boton == "anterior"){
        imagenActual --;
        if(imagenActual < 0){
            imagenActual = imagenes.length -1;
        }
    } else{
        imagenActual ++;
        if (imagenActual == imagenes.length){
            imagenActual = 0;
        }
    }
    var imagenMostrar = imagenes[imagenActual];
    document.getElementById("imagen") = imagenMostrar
}
//paso 1 --> crear el array de imagenes
var arrayImagenes = ["images/image-product-1.jpg" , "images/image-product-2.jpg","images/image-product-3.jpg" , "images/image-product-4.jpg"]

//que imagen mostramos
var imagenActual = 0;

//Cada 2 segundos se ejecute esta funcion
var temporizador;


//paso 2: listeners de los botones de anterior y siguiente
document.getElementById("anterior").addEventListener("click", cambiarImagen);
document.getElementById("siguiente").addEventListener("click", cambiarImagen);

//paso 3: Definir la función
function cambiarImagen() {
    var boton = this.id;
    
    if(boton == 'anterior') {
        imagenActual --;
        if(imagenActual < 0) {
            imagenActual = arrayImagenes.length -1; 
        } 
    } else {
        imagenActual ++;
        if(imagenActual == arrayImagenes.length) {
            imagenActual = 0;
        } 
    }
    var imagenAMostrar = arrayImagenes [imagenActual];
    document.getElementById('imagen').src =  imagenAMostrar;
}



