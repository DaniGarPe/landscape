$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 50){
            $(".subir").css("display","block");
        }
        else{
            $(".subir").css("display","none");
        }
    });
});