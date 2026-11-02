$(document).ready(function(){
    $(".gallery img").click(function(){
        let image = $(this).attr("src");
        $("#largeImage").attr("src" , image);
        $("#preview").fadeIn(500);
        $("#largeImage").css({
            width: "200px",
            height: "auto"
        });
        $("#largeImage").animate({
            width:"500px"
        } , 500);
    });
    $("#close").click(function(){
        $("#preview").fadeOut(500);
    });
});