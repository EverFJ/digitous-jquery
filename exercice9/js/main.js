// $(document).ready(function() {
//     $("button").click(function() {
//         $("#text").css("display", "block")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("text").style.display = "block";
})