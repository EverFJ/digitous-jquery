$(document).ready(function() {
    $("button").click(function() {
        console.log($("input").val().length)
        if ($("input").val().length <= 5) {
            $("input").removeClass("is-valid")
            $("input").addClass("is-invalid")
        } else {
            $("input").removeClass("is-invalid")
            $("input").addClass("is-valid")
        }
    })
})