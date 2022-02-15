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

//tocar la imagen 

function imagen (){
    alert("tocaste 2 veces la imagen :) ")
}




//Aincremento y ecremento 
var contador =document.getElementById("mostrarCantidadProducto");
var cantidadContador = contador.value;


function addPlus(){
    cantidadContador ++;
    document.getElementById("mostrarCantidadProducto").value = cantidadContador;
}

function minusButton(){
    if ( cantidadContador > 0 ){
        cantidadContador--;
        document.getElementById("mostrarCantidadProducto").value = cantidadContador;
    } 
 
}







//agregar producto
function addProducto(){
     productoGuardado = localStorage.getItem('cantidadProductoGuardado') ;
    if(cantidadContador > 0){
        if(productoGuardado === null ){
            localStorage.setItem('cantidadProductoGuardado',cantidadContador);
            localStorage.getItem('cantidadProductoGuardado');
            document.getElementById("mostrarCantidadProducto").value = 0;
            var obtenerValor =localStorage.getItem('cantidadProductoGuardado');
            card_btn.innerHTML=`
         <p>${obtenerValor} </p>
         <img src="./images/icon-cart.svg" alt=""  >`;
           alert(obtenerValor)
            
    
        }
        else{
            var sumandoProducto =parseInt (localStorage.getItem('cantidadProductoGuardado')) + parseInt (cantidadContador);
            localStorage.setItem('cantidadProductoGuardado',sumandoProducto);
            cantidadContador=0;
            document.getElementById("mostrarCantidadProducto").value = 0;
            var obtenerValor =localStorage.getItem('cantidadProductoGuardado');
            card_btn.innerHTML=`
         <p>${obtenerValor} </p>
         <img src="./images/icon-cart.svg" alt=""  >`;
        
    
        }
        
    }else{ card_btn.innerHTML=`
    <img src="./images/icon-cart.svg" alt=""  >`;
    }
   
}

function mostrarProductorCardBoton(){
    Productos=localStorage.getItem('cantidadProductoGuardado');
     var productosGuardados = parseInt(Productos);

     if( productosGuardados >= 1){
         card_btn.innerHTML=`
         <p>${productosGuardados} </p>
         <img src="./images/icon-cart.svg" alt=""  >`;
     }else{
        card_btn.innerHTML=`
        <img src="./images/icon-cart.svg" alt=""  >`;
     }
}
document.addEventListener('DOMContentLoaded',mostrarProductorCardBoton,false);







/*   ver los prouctos del carrito  MODAL    */
const open_modal = document.getElementById("card_btn");
const modal_cont = document.getElementById("modal_container");
cerrar_abrir = 0;
function mostrarProductosCarrito(){
     Productos=localStorage.getItem('cantidadProductoGuardado');
     var productosGuardados = parseInt(Productos);
     modal_cont.innerHTML = '';
      


    if(Productos == null){
        
        card_btn.innerHTML=`
         <p>${productosGuardados} </p>`;
         if(cerrar_abrir == 1){
             cerrar_abrir =0;
             console.log("cerrado");
             console.log(cerrar_abrir);

            modal_cont.innerHTML = ``;
             
         }else{
             cerrar_abrir =1;
             console.log("abierto");
             console.log(cerrar_abrir);
             modal_cont.innerHTML = `
        <div>
            <p>Card</p>
            <p>your cart is empty</p>
        </div>`;
             
         }


    }else{
        
         if(cerrar_abrir == 1){
            console.log("cerrado3")
            cerrar_abrir =0;
            modal_cont.innerHTML = ``;
        }else{
            console.log("abierto4")
            cerrar_abrir =1;
            var valorPorProducto = productosGuardados * 125;
            modal_cont.innerHTML = `
            <div>
                <h1>card</h1>
                <div>
                    <img src="./images/image-product-1-thumbnail.jpg" alt="">
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <div>
                        <p>$125.00 x</p>
                        <p>${Productos}</p>
                        <p>${valorPorProducto}</p>
                    </div>
                </div>
                <button type="button" id="borrarCarro"  ><img src="./images/icon-delete.svg" alt=""></button>
             </div>
        </div>
             <button>Checkout</button>`;
        }
         console.log(cerrar_abrir)
    }
}

//modal imagen

let cerrar = document.getElementById("closed-img");
let modalConteiner = document.querySelectorAll(".modal-container-img");
let modalImagen = document.querySelectorAll(".modalImg");

function abrirModalContainer (){
    modalConteiner.style.opacity = "1";
    modalConteiner.style.visibility = "visible";
    alert("opacyti")


}

function hoa(){
    alert("hola")
}


