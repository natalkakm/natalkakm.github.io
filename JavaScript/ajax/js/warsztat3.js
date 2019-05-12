
const dodajDane = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight){
    fetch('https://jsonplaceholder.typicode.com/users') 
         .then(response => response.json())
         .then(data => {
                data.forEach(user => {
                    const divek = document.getElementById('divek');
                    divek.innerHTML += `
                <p>User ID: ${user.id}</p> <br />
                <p>User NAME: ${user.name}</p> <br />
                <p>User WEBSITE: ${user.website}</p>
                `
                })
   
            });
        } 
}

window.addEventListener('scroll', dodajDane);

