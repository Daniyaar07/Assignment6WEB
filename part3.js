$(document).ready(function(){
    let count = 1;

    $("#add").click(function(){
        count ++;
        $("#list").append("<li>Item" + count + "</li>");
    });

    $("#prepend").click(function(){
        count++;
        $("#list").prepend("<li>Item " + count + "</li>")
    });

    $("#remove").click(function(){
        $("#list li:last").remove();
    });




    $("#changeImage").click(function(){
        $("#photo").attr("src" , "https://cameralabs.org/media/k2/items/cache/8f878ea0803189dcd4867928ffaf1eb9_L.jpg");
    });

    $("#changeLink").click(function(){
        $("#link").attr("href" , "https://www.tiktok.com");
        $("#link").text("Open TikTok");
    });



    $("#name").on("input",  function(){
        $("#resultName").text("Name: " + $("#name").val());
    });

    $("#email").on("input" , function(){
        $("#resultEmail").text("Email: " + $("#email").val());
    });

    $("#form").submit(function(event){
        event.preventDefault();
    });
});