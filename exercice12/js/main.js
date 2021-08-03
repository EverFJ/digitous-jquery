// $(document).ready(function() {
//     $("button").click(function() {
//         $("#square").css("width", "500px")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("square").style.width = "500px";
})