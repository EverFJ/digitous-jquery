// $(document).ready(function() {
//     $("button").click(function() {
//         $("input").removeAttr("disabled")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementsByTagName("input")[0].removeAttribute("disabled");
})