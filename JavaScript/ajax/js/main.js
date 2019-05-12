// fetch('https://jsonplaceholder.typicode.com/posts') 
//     .then(response => response.json())
//     .then(response => {
// console.log(response); });

//największym uproszczeniem jest fetch, więc na tym się skupię


// $.getJSON(
//     'https:jsonplaceholder.typicode.com/posts',
//     response => {
//         console.log(response);
//     }
// )

//z JSONa lepiej korzystać, jeśli i tak się z niego korzysta

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users",
//     dataType: "json",
//     success: function (resultJSON) { 
//         console. log(resultJSON);
//     },
//     onerror: function (msg) { 
//         console. log(msg);
//     } 
// });

const ajax = (method, url) => {
    console.log(method, url);
    //tworzymy obiekt
    let httpReq = new XMLHttpRequest();

    //otwieramy połączenie
    httpReq.open(method, url);
    // console.log(httpReq);
    //w momencie dotarcia do serwera
    httpReq.onreadystatechange = () => {
        //jesli wszystko poszlo pomyslnie i dane zostały zwrócone
        if (httpReq.readyState === 4 && httpReq.status === 200) {
            //wrzucamy dane do zmiennej
            let response = httpReq.responseText;

            //parsujemy JSON stringa do tablicy z obiektami
            response = JSON.parse(response);
            console.log(response);

            //zerujemy połączenie, czyli rozłączamy się z serwerem
            httpReq = null;

        }
    }
    //wywolujemy onreadystatechange()
    httpReq.send();
}


// odswiezanie danych
// setInterval(() => {
    ajax('GET', 'https://jsonplaceholder.typicode.com/users');
// }, 3000);
