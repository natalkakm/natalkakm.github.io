// let button = document.getElementById("button");

// let getData = () =>{
// $.getJSON(
//      'https:jsonplaceholder.typicode.com/users/1',
//      response => {
//         const user = response;
//         const paragraf = document.createElement('p');

//              paragraf.html ( `
//              <span>User ID: ${user.id}</span>
//              <span>User NAME: ${user.name}</span>
//              <span>User WEBSITE: ${user.website}</span>
//              `);
//              button.insertAdjacentElement('afterend', paragraf);
//      });
// };
    
//  $( "#button" ).click(getData);


let button = document.getElementById("button");

const getData = () =>{
$.getJSON(
     'https:jsonplaceholder.typicode.com/users/1',
     response => {
        const user = response;
        const paragraf = $('<p>');

             paragraf.html ( `
             <span>User ID: ${user.id}</span> <br />
             <span>User NAME: ${user.name}</span> <br />
             <span>User WEBSITE: ${user.website}</span>
             `);

             $('#button').after(paragraf)
})
}
    
 $( "#button" ).click(getData);