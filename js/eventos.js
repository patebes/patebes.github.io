
var reproductor = document.getElementById("audio");
reproductor.addEventListener("ended", function(){
    document.getElementById("demo").innerHTML = "¡Muchas gracias!";
});

document.querySelectorAll('.printbutton').forEach(function(element) {
    element.addEventListener('click', function() {
        print();
    });
});


        

