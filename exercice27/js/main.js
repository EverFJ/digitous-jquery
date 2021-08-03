// $(document).ready(function() {
//     $("button").click(function() {
//         $("input").addClass("is-valid")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementsByTagName("input")[0].classList.add("is-valid");
})