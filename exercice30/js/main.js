// $(document).ready(function() {
//     $("input").keyup(function() {
//         if ($("input").val().length <= 5) {
//             $("input").removeClass("is-valid")
//             $("input").addClass("is-invalid")
//         } else {
//             $("input").removeClass("is-invalid")
//             $("input").addClass("is-valid")
//         }
//     })
// })

document.addEventListener("keypress", function() {
    let inputVal = document.getElementsByTagName("input")[0].value;
    if (inputVal.length <= 5) {
        document.getElementsByTagName("input")[0].classList.remove("is-valid");
        document.getElementsByTagName("input")[0].classList.add("is-invalid");
    } else {
        document.getElementsByTagName("input")[0].classList.remove("is-invalid");
        document.getElementsByTagName("input")[0].classList.add("is-valid");

    }
})