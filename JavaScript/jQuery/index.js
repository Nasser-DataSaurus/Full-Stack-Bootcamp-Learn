// $(document).keypress(function(event) {
    
//     $("h1").text(event.key);
//     $("title").text(event.key);
// });

$(document).on("keypress",function(event) {
    
    $("h1").text(event.key);
    $("title").text(event.key);
});