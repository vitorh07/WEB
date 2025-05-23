let todosOsPokemons = [];

for (let id = 1; id <= 168; id++) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`, (response) => {
        todosOsPokemons.push(response);

        if (todosOsPokemons.length === 168) {
            mostrarPagina(1);
            criarPaginacao();
        }
    });
}

function mostrarPagina(pagina) {
    const inicio = (pagina - 1) * 10;
    const fim = inicio + 10;
    const pokemonsDaPagina = todosOsPokemons.slice(inicio, fim);

    const tabela = document.getElementById("pokemons");
    tabela.innerHTML = "";

    pokemonsDaPagina.forEach(pokemon => {
        tabela.innerHTML += `
            <tr>
                <th>${pokemon.id}</th>
                <td>${pokemon.name}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></td>
                <td>${pokemon.height}</td>
                <td>${pokemon.weight}</td>
            </tr>
        `;
    });
    
    $(document).on('click', '.page-link', function () {
        const pagina = parseInt($(this).text());
        mostrarPagina(pagina);
    });
}

function criarPaginacao() {
    const pages = Math.ceil(168 / 10);
    const lista = $('#lista');
    lista.html("");

    for (let i = 1; i <= pages; i++) {
        lista.append(`<li class="page-item"><a class="page-link" href="#">${i}</a></li>`);
    }
}