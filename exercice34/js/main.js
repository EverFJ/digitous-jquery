$(document).ready(function() {
    $("button").click(function() {
        let input = $("input").val();
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/" + input,
            success: function(data, statuts, response) {
                $("#country").html(data[0].name)
                $("#capital").html(data[0].capital)
            }
        })
    })
})