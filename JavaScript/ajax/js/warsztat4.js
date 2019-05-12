const dodajDane = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight){
    fetch('http://leguralnie.pl/json/ogloszenia-json.json') 
         .then(response => response.json())
         .then(data => {
                data.forEach(user => {
                    const divek = document.getElementById('divek');
                    divek.innerHTML += `
            
                `
                })
   
            });
        } 
}

window.addEventListener('scroll', dodajDane);