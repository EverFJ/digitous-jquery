$(document).ready(function() {
    $("button").click(function() {
        // The id #bg is not working...
        $("#exercise").animate({
            left: "100px",
            display: "none"
        })
    })
})