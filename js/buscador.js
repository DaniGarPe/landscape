$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $("#myInputMob").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".buscar-txt").on( "focus", function() {
		$(".resultados").css("display", "block");
    });
	$(".buscar-txt").on( "blur", function() {
		$(".resultados").css("display", "none");
	});
    
});