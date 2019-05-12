let button = document.getElementById("button");

let getData = async () => {
// let destination = document.getElementById("destination");

    const data = await fetch('https://jsonplaceholder.typicode.com/users/1') 
         .then(response => response.json())
         .then(response => {
             const user = response;
             const paragraf = document.createElement('p');

             paragraf.innerHTML = `
             <span>User ID: ${user.id}</span>
             <span>User NAME: ${user.name}</span>
             <span>User WEBSITE: ${user.website}</span>
             `;

    //     destination.innerHTML = response.id + ' ' + response.username + ' ' + response.website
    //  console.log(response.id); })
        button.insertAdjacentElement('afterend', paragraf);
});
}

         

// let klikniecie = () => {
//     console.log('button');
// }

button.addEventListener('click', getData);