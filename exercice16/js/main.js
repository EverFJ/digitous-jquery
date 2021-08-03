// $(document).ready(function() {
//     $("button").click(function() {
//         $("#text").html("Konexio!")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("text").textContent = "Konexio!";
})