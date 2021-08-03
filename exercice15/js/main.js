// $(document).ready(function() {
//     $("button").click(function() {
//         $("#text").addClass("float-right")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("text").classList.add("float-right");
})