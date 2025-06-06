let contador = 0;
let produtos = [];

$.getJSON("./data.json", (response) => {
    for (let p of response) {
        contador += 1;
    }

    document.getElementById("total-produtos").innerHTML += parseInt(contador);
}
);

function renderizarProdutos(lista){
    lista.forEach(produto =>{
        document.getElementById("catalogo").innerHTML +=
            `
                        <div class="col-12 col-md-6 col-lg-3 justify-content-center mb-3 mt-3">
                                <div class="card">
                                        <div class="card-body">
                                            <p class="card-title">${produto.title}</p>
                                        <img src=${produto.image} alt="Produto">
                                        </img>
                                            <p class="card-title">$${produto.price}</p>
                                        </div>
                                </div>
                        </div>
              `;
    })
}

function pesquisarProduto(busca){
    $('#catalogo').empty();
    const buscaLower = busca.toLowerCase();
    const pesquisa = produtos.filter(produto => produto.title.toLowerCase().includes(buscaLower));
    renderizarProdutos(pesquisa);
}

function ordenarPrecoMenor() {
    $('#catalogo').empty();
    const ordenado = produtos.sort((a, b) => a.price - b.price);
    renderizarProdutos(ordenado);
}

function ordenarPrecoMaior() {
    $('#catalogo').empty();
    const ordenado = produtos.sort((a, b) => b.price - a.price);
    renderizarProdutos(ordenado);
}

$(document).ready(function (){
        $.getJSON('./data.json', function (data){
            produtos = data;
            renderizarProdutos(produtos)
        });

        $('#ordenarPrecoMenor').on('click', function(){
            ordenarPrecoMenor();
        });

        $('#ordenarPrecoMaior').on('click', function(){
            ordenarPrecoMaior();
        });

        $('#search').on('input', function(){
            pesquisarProduto($(this).val());
        })
});