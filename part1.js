$(document).ready(function() {
    console.log("jQuery is ready");

    $("#change").click(function(){
        $("#first").text("Changed ID");

        $(".second").html("<b>Changed class</b>");

        $("h3").text("Changed tag");

        $("#first").css("color" , "red");
        
        $(".second").css("background-color", "yellow");

        $("h3").css("font-size" , "30px");
    });
});