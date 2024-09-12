var prods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa de Frango", price: 25.0 },
    { id: 3, name: "Carne de Panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var nome       = document.getElementById("nome").value;
    var total      = 0;
    
    output.innerHTML = "";
    
    output.innerHTML += `<h5>Caro(a) ${nome} </h5>`;
    output.innerHTML += `<p>Segue os dados do seu pedido.</p>`;
    output.innerHTML += `<p>Seu pedido é:</p>`;

    for (var input of quantities) {
        var id = input.id;

        if (input.value > 0) {
            output.innerHTML += `<li>Produto: ${prods[id-1].name}  - Preço: ${prods[id-1].price} - Quantidade: ${input.value}</li> </br>`;
            total += prods[id-1].price * parseFloat(input.value);
        }
    }

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    
    output.innerHTML += `<h5>Total: ${formatter.format(total)}</h5>`;
}

$("#wpp").mask("(99) 9999-99999");