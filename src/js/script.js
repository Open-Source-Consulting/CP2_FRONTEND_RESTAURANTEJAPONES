// Variáveis Globais
let totalDeItens = 0;
let valorTotal = 0;
let listaDePratos = ""; // Variável de texto vazia que vai acumular os pedidos

// 1. Função para adicionar ao carrinho
function adicionarAoCarrinho(nomeDoPrato, precoDoPrato) {
    let resposta = prompt("Quantas porções de " + nomeDoPrato + " você deseja?");
    
    if (resposta == null) {
        return; 
    }

    let quantidade = parseInt(resposta);

    while (isNaN(quantidade) || quantidade <= 0) {
        resposta = prompt("Valor inválido! Digite um número maior que zero:");
        if (resposta == null) {
            return; 
        }
        quantidade = parseInt(resposta);
    }

    const subtotal = precoDoPrato * quantidade;
    
    // Atualiza a matemática
    totalDeItens = totalDeItens + quantidade;
    valorTotal = valorTotal + subtotal;

    // CONCATENAÇÃO: Adiciona o texto do prato na nossa lista
    listaDePratos = listaDePratos + quantidade + "x " + nomeDoPrato + " ..... R$ " + subtotal.toFixed(2) + "\n";

    alert(quantidade + "x " + nomeDoPrato + " adicionado ao carrinho!");

    // Chama a função para atualizar o texto do botão na tela
    atualizarBotaoCarrinho();
}

// 2. Função para mostrar o resumo e fechar pedido
function fecharPedido() {
    if (totalDeItens == 0) {
        alert("Seu carrinho está vazio. Adicione algum prato primeiro!");
    } else {
        // Monta a mensagem completa juntando os textos
        let mensagem = "🥢 RESUMO DO PEDIDO 🥢\n\n";
        mensagem = mensagem + listaDePratos;
        mensagem = mensagem + "\n=======================";
        mensagem = mensagem + "\nTOTAL A PAGAR: R$ " + valorTotal.toFixed(2);
        mensagem = mensagem + "\n=======================\n\nDeseja finalizar esta compra?";

        // confirm() é uma função nativa simples que retorna true (OK) ou false (Cancelar)
        let confirmacao = confirm(mensagem);

        if (confirmacao == true) {
            alert("🎉 Pedido finalizado com sucesso! O Sakura House agradece.");
            
            // Limpa tudo (Zera o carrinho)
            totalDeItens = 0;
            valorTotal = 0;
            listaDePratos = "";
            atualizarBotaoCarrinho();
        }
    }
}

// 3. Função para atualizar o número no botão do HTML
function atualizarBotaoCarrinho() {
    const botao = document.getElementById("btn-carrinho");
    if (botao != null) {
        botao.innerText = "🛒 Ver Carrinho (" + totalDeItens + " itens) - R$ " + valorTotal.toFixed(2);
    }
}

// 4. Validação do formulário (mantida como você aprendeu)
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