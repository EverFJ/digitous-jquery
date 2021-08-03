// $(document).ready(function() {
//     $("button").click(function() {
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/name/france",
//             success: function(data, statuts, response) {
//                 console.log(`Name of the country : ${data[0].name}`)
//                 console.log(`Capital of the country : ${data[0].capital}`)
//             }
//         })
//     })
// })

// Not possible in vanilla

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.eu/rest/v2/name/france", true);
    request.onload = function() {
        var res = JSON.parse(this.response)
        console.log(res[0].name)
        console.log(res[0].capital)
    }
    request.send();
})