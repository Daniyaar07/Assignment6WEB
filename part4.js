$(document).ready(function(){
    $("#basic").click(function(){
        $("#box1").animate({
            width: "150px",
            height: "150px",
            left: "100px"
        }, 1000);
    });


    $("#sequence").click(function(){
        $("#box2").animate({left: "200px"} , 500)
        .animate({top: "100px"}, 500)
        .animate({width:"50px" , 
            height : "50px"
        }, 500)
        .animate({
            left: "0px",
            top: "0px",
            width: "100px",
            height: "100px"
        } , 500);
    });


    $("#combined").click(function(){
        $("#box3").animate({
            opacity: 0.3,
            width: "180px",
            height: "180px",
            left: "200px"
        } , 1000);
    });
});