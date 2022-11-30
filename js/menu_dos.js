$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 50){
            if(scroll >500){
                $(".desk").css("background","white"); 
                $(".desk").css("box-shadow","0 2px 2px 0 rgba(0, 0, 0, 0.14)"); 
                $(".titulo").css("filter","drop-shadow(5px 5px 5px grey)"); 
            }
            else{
                $(".desk").css("background","linear-gradient(90deg, rgb(255,255,255),rgba(255,255,255,.7))");  
                $(".desk").css("box-shadow","0 2px 2px 0 rgba(0, 0, 0, 0.14)");
                $(".titulo").css("filter","drop-shadow(5px 5px 5px grey)"); 
            }
        }
        else{
            $(".desk").css("background","");
            $(".desk").css("box-shadow","none");
            $(".titulo").css("filter","drop-shadow(5px 5px 5px white)"); 
        }
    });
});