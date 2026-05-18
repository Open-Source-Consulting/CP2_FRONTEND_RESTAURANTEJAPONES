// Variáveis Globais
let totalDeItens = 0;
let valorTotal = 0;
let listaDePratos = ""; 

// Função para adicionar ao carrinho
function adicionarAoCarrinho(nomeDoPrato, precoDoPrato) {
    let resposta = prompt("Quantas porções de " + nomeDoPrato + " você deseja?");

    if (resposta == null) {
        return;
    }

    let quantidade = parseInt(resposta);

    // Validação usando WHILE
    while (isNaN(quantidade) || quantidade <= 0) {
        resposta = prompt("Valor inválido! Digite um número maior que zero:");
        if (resposta == null) {
            return;
        }
        quantidade = parseInt(resposta);
    }

    const subtotal = precoDoPrato * quantidade;

    totalDeItens = totalDeItens + quantidade;
    valorTotal = valorTotal + subtotal;

    listaDePratos = listaDePratos + quantidade + "x " + nomeDoPrato + " ..... R$ " + subtotal.toFixed(2) + "\n";

    alert(quantidade + "x " + nomeDoPrato + " adicionado ao carrinho!");

    atualizarBotaoCarrinho();
}

function fecharPedido() {
    if (totalDeItens == 0) {
        alert("Seu carrinho está vazio. Adicione algum prato primeiro!");
    } else {
        let mensagem = "🥢 RESUMO DO PEDIDO 🥢\n\n";
        mensagem = mensagem + listaDePratos;
        mensagem = mensagem + "\n=======================";
        mensagem = mensagem + "\nTOTAL A PAGAR: R$ " + valorTotal.toFixed(2);
        mensagem = mensagem + "\n=======================\n\nDeseja finalizar esta compra?";


        let confirmacao = confirm(mensagem);

        if (confirmacao == true) {
            alert("🎉 Pedido finalizado com sucesso! O Sakura House agradece.");
            totalDeItens = 0;
            valorTotal = 0;
            listaDePratos = "";
            atualizarBotaoCarrinho();
        }
    }
}

function atualizarBotaoCarrinho() {
    const botao = document.getElementById("btn-carrinho");
    if (botao != null) {
        botao.innerText = "🛒 Ver Carrinho (" + totalDeItens + " itens) - R$ " + valorTotal.toFixed(2);
    }
}

function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome == "") {
        alert("Erro: O campo NOME não pode estar vazio.");
        return false;
    } else if (email == "") {
        alert("Erro: O campo EMAIL não pode estar vazio.");
        return false;
    } else if (mensagem == "") {
        alert("Erro: A MENSAGEM não pode estar vazia.");
        return false;
    } else {
        alert("Mensagem enviada com sucesso!");
        return true;
    }
}

window.onload = function() {
    const formContato = document.getElementById("formulario");
    if (formContato != null) {
        formContato.onsubmit = validarFormulario;
    }
}