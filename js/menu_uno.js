$(document).ready(function(){
    $(".hamburger-btn .fa-times").hide();
    
    $(".hamburger-btn .fa-bars").click(function(){
        $(this).hide(500);
        $(".hamburger-btn .fa-times").show(500);
        $(".mob ul").addClass("active");
        $(".fondo-mob").css("display","block");
    });
    
    $(".hamburger-btn .fa-times").click(function(){
        $(this).hide(500);
        $(".hamburger-btn .fa-bars").show(500);
        $(".mob ul").removeClass("active");
        $(".fondo-mob").css("display","");
    });
    
});