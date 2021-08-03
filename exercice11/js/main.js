// $(document).ready(function() {
//     $("button").click(function() {
//         $("#square").css("background-color", "red")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("square").style.backgroundColor = "red";
})