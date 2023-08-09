let botao = document.getElementById('cadastro');
let namee = document.getElementById('nome');
let descri = document.getElementById('descricao');
let preco = document.getElementById('preco');
let item = document.getElementById('itens');

 

let products = [];

{

  let nome= namee.value;

  let descricao = descri.value;

  let preco = parseFloat(preco.value);

 

  if (nome && descricao && preco) {

    let product = { nome, descricao, preco };

    products.push(product);

    dipro();

    liinputs();

  }

};

 

function dipro() {

  item.innerHTML = '';


   let itemlis = document.createElement('li');

    itemlis.innerHTML = `

      <h3>${product.nome}</h3>

      <p>${product.descricao}</p>

      <p>Preço: R$ ${product.preco.toFixed(2)}</p>

    `;

    item.appendChild(itemlis);

  };



 

function liinputs() {

  nome.value = '';

  descri.value = '';

  preco.value = '';

}

 