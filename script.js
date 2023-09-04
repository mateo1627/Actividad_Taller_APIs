function fetchRickAndMortyData() {
    
    const apiUrl = 'https://rickandmortyapi.com/api/character';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
           
           document.getElementById('result').innerHTML = '';

            // Recorre el array con la info de los personajes y muestra los detalles en cada elemento
            data.results.forEach(character => {
                const characterElement = document.createElement('div');
                characterElement.className = 'character';

                const imageElement = document.createElement('img');
                imageElement.src = character.image;
                characterElement.appendChild(imageElement);

                const nameElement = document.createElement('h2');
                nameElement.textContent = character.name;
                characterElement.appendChild(nameElement);

                const statusElement = document.createElement('p');
                statusElement.textContent = `Status: ${character.status}`;
                characterElement.appendChild(statusElement);

                const speciesElement = document.createElement('p');
                speciesElement.textContent = `Species: ${character.species}`;
                characterElement.appendChild(speciesElement);

                document.getElementById('result').appendChild(characterElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
