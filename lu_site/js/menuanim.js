// This is for animations of Menu and Statement in the Gallery Pages

$(document).ready(function(){
    $("#menuicon").mouseenter(function(){
        $(".menuright").fadeIn()
    }); 
    $(".menuright").mouseleave(function(){
        $(".menuright").fadeOut()
    }); 
    $(".menu").mouseleave(function(){
        $(".menuright").fadeOut()
    }); 
    $("#titleicon").mouseenter(function(){
        $(this).css("filter", "brightness(20%)");
        $(this).css("transform", "scale(1.2)");
        $("#statementbkgd").fadeIn();
        $(".stateleft").fadeIn();
    }); 
    $("#titleicon").mouseleave(function(){
        $(this).css("filter", "brightness(100%)")
        $(this).css("transform", "scale(1)");
        $(".stateleft").fadeOut();
        $("#statementbkgd").fadeOut();
    }); 
});