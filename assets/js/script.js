$(document).ready(function(){
    $('.btn').click(function(){
        $(".mano_izquierda img").animate( {rotate: '360deg'},800  ); 
        $(".mano_derecha img").animate({rotate: '180deg'}, 5000 ),$(".mano_derecha img").animate({rotate: '480deg'}, 1000 );
        $(".cola img").animate({height: "50px"},3000), $(".cola img").animate({height: "200px"},1000)
        $(".cuerpo img").animate({rotate: '180deg'}, 2000 ), $(".cuerpo img").animate({rotate: '360deg'}, 2000 );
        $(".ojo_izquierdo img").animate({left: '190px'},1500),$(".ojo_izquierdo img").animate({left: '100px'},1500)
        $(".ojo_derecho img").animate({left: '100px'},1500),$(".ojo_derecho img").animate({left: '190px'},1500)


        console.log('esta animando')
      });
    
})
