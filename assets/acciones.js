$(document).ready(function(){


    $("#btn-close").click(function(){
      $(".mesage").hide();
      $(this).hide();
    });

    $(".community").click(function(){
        $(".desplegable").toggle();
      });

      $("#cerrar_get_touch").click (function(){
        $("#get_touch").removeClass("activo");
    })
    
    $("#get_touch").click(function (e){
        var container = $("#cerrar_get_touch");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            $("#get_touch").addClass("activo");
        }
    });

/*      $(".sign").click(function(){
        $("#formulario").slideToggle("slow");
      });

      $("#").click(function(){
        $("#formulario").slideToggle("slow");
      });
*/
      $(".nav-links").click(function(){
        $("#formulario").slideToggle("slow");
      });



/*      slider herramientas    */
      $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    });
    
    });