$(document).ready(function(){
    $("#hide").click(function(){
        $("#text").hide();
    });

    $("#show").click(function(){
        $("#text").show();
    });

    $("#toggle").click(function(){
        $("#text").toggle();
    });



    $("#fadeIn").click(function(){
        $("#image").fadeIn();
    });

    $("#fadeOut").click(function(){
        $("#image").fadeOut();
    });

    $("#fadeToggle").click(function(){
        $("#image").fadeToggle();
    });



    $("#slideUp").click(function(){
        $("#panel").slideUp();
    });

    $("#slideDown").click(function(){
        $("#panel").slideDown();
    });

    $("#slideToggle").click(function(){
        $("#panel").slideToggle();
    });
});