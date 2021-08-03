// $(document).ready(function() {
//     $("button").click(function() {
//         $("#text").show()
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("text").style.display = "block";
})