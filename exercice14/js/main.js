// $(document).ready(function() {
//     $("button").click(function() {
//         $("#text").attr("class", "float-right")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementById("text").classList.add("float-right");
})