// $(document).ready(function() {
//     $("button").click(function() {
//         $("#text").css("font-size", "50px")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("text").style.fontSize = "50px";
})