// $(document).ready(function() {
//     $("button").click(function() {
//         console.log($("input").val())
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    console.log(document.getElementsByTagName("input")[0].value);
})