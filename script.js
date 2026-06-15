// Banco de dados simulado de cartas
const deckColecao = [
    {
        nome: "Fênix Renascida",
        tipo: "Criatura / Fogo",
        descricao: "Se esta carta for destruída, ela retorna ao campo no próximo turno com o dobro de ataque.",
        raridade: "lendario"
    },
    {
        nome: "Escudo de Gelo",
        tipo: "Magia / Água",
        descricao: "Bloqueia o próximo ataque direto do oponente e reduz o dano a zero.",
        raridade: "comum"
    },
    {
        nome: "Assassino das Sombras",
        tipo: "Guerreiro / Trevas",
        descricao: "Pode atacar diretamente os pontos de vida do oponente se ele controlar monstros de Luz.",
        raridade: "raro"
    },
    {
        nome: "Golem de Pedra",
        tipo: "Defensor / Terra",
        descricao: "Uma parede intransponível. Possui alta defesa, mas não pode atacar.",
        raridade: "comum"
    },
    {
        nome: "Relâmpago Sagrado",
        tipo: "Magia / Luz",
        descricao: "Destrói uma criatura no campo do oponente instantaneamente.",
        raridade: "lendario"
    }
];

// Seleção de elementos do HTML
const drawBtn = document.getElementById('draw-btn');
const resultCard = document.getElementById('result-card');
const cardName = document.getElementById('card-name');
const cardType = document.getElementById('card-type');
const cardDesc = document.getElementById('card-desc');
const cardRarity = document.getElementById('card-rarity');

// Evento de clique no botão
drawBtn.addEventListener('click', () => {
    // Escolhe um índice aleatório baseado no tamanho do nosso array de cartas
    const indiceAleatorio = Math.floor(Math.random() * deckColecao.length);
    const cartaSorteada = deckColecao[indiceAleatorio];

    // Preenche os dados da carta sorteada no HTML
    cardName.textContent = cartaSorteada.nome;
    cardType.textContent = cartaSorteada.tipo;
    cardDesc.textContent = cartaSorteada.descricao;
    cardRarity.textContent = cartaSorteada.raridade;

    // Reseta as classes de raridade antigas e adiciona a nova
    cardRarity.className = "rarity " + cartaSorteada.raridade;

    // Remove a classe 'hidden' para fazer a carta aparecer na tela
    resultCard.classList.remove('hidden');
    
    // Altera o texto do botão após o primeiro sorteio
    drawBtn.textContent = "Sortear Outra Carta";
});
