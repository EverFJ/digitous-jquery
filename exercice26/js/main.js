// $(document).ready(function() {
//     $("button").click(function() {
//         $("input").addClass("is-invalid")
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    document.getElementsByTagName("input")[0].classList.add("is-invalid");
})