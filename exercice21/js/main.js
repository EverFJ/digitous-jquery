$(document).ready(function() {
    $("button").click(function() {
        $("#square").animate({
            width: "500px"
        })
    })
})

// document.getElementsByTagName("button")[0].addEventListener("click", function() {
//     document.getElementById("square").animate()
// })

// Looks not possible with vanilla