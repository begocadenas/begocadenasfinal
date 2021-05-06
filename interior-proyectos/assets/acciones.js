$(document).ready(function(){
   

    var imagen= $(".integracion");
    var explicacion= $(".explicacion");

    imagen.hover(function(){
        explicacion.slideToggle();
        console.log("entra");
    })

    var imagen= $(".integracion1");
    var explicacion1= $(".explicacion1");

    imagen.hover(function(){
        explicacion1.slideToggle();
        console.log("entra");
    })

    var imagen= $(".integracion2");
    var explicacion2= $(".explicacion2");

    imagen.hover(function(){
        explicacion2.slideToggle();
        console.log("entra");
    })


    });   
