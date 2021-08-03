// $(document).ready(function() {
//     $("button").click(function() {
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/name/france",
//             success: function(data, statuts, response) {
//                 $("#country").html(data[0].name)
//                 $("#capital").html(data[0].capital)
//             }
//         })
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.eu/rest/v2/name/france", true);
    request.onload = function() {
        var res = JSON.parse(this.response)
        document.getElementById("country").textContent = res[0].name;
        document.getElementById("capital").textContent = res[0].capital;
    }
    request.send();
})