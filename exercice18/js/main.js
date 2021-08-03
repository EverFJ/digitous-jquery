// $(document).ready(function() {
//     $("button").click(function() {
//         $("#text").hide()
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("text").style.display = "none";
})