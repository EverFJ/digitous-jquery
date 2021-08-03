// $(document).ready(function() {
//     $("button").click(function() {
//         let input = $("input").val();
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/name/" + input,
//             success: function(data, statuts, response) {
//                 $("#country").html(data[0].name)
//                 $("#capital").html(data[0].capital)
//             }
//         })
//     })
// })

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    let inputVal = document.getElementsByTagName("input")[0].value;
    let request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.eu/rest/v2/name/" + inputVal, true);
    request.onload = function() {
        var res = JSON.parse(this.response)
        document.getElementById("country").textContent = res[0].name;
        document.getElementById("capital").textContent = res[0].capital;
    }
    request.send();
})