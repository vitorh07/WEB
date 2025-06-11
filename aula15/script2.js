for (let id = 1; id <= 168; id++) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`, (response) => {
        document.getElementById("pokemons").innerHTML += `
            <tr>
                <th>${response.id}</th>
                <td>${response.name}</td>
                <td><img src="${response.sprites.front_default}" alt="${response.name}"></td>
                <td>${response.height}</td>
                <td>${response.weight}</td>
            </tr>
        `;
    });
}