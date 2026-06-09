// ==========================================
// CONFIGURAÇÕES GERAIS / CONSTANTES
// ==========================================
const CONFIG_AGRINHO = {
    DATA_LIMITE: new Date("August 31, 2026 23:59:59").getTime(),
    MENSAGENS_CATEGORIAS: {
        desenho: "🎨 Categoria Desenho: Destinado a Alunos da Educação Infantil e 1º ano. O tema deve focar em sustentabilidade.",
        redacao: "✍️ Categoria Redação: Do 2º ao 9º ano e Ensino Médio. Gêneros textuais variam de acordo com o ano escolar.",
        professor: "👩‍🏫 Experiência Pedagógica: Relatos de projetos práticos aplicados em sala de aula com a comunidade.",
        padrao: "🌱 Participe do Agrinho 2026 e mude a realidade da sua comunidade!"
    }
};

// ==========================================
// 1. CONTAGEM REGRESSIVA PARA AS INSCRIÇÕES
// ==========================================
/**
 * Inicia e gerencia o cronômetro da data limite.
 * Otimização: Uso de seletores opcionais para atualizar elementos HTML caso existam.
 * @param {string} [idDisplay] - ID do elemento HTML para renderizar o texto.
 */
function iniciarContagemRegressiva(idDisplay = null) {
    const elementoHtml = idDisplay ? document.getElementById(idDisplay) : null;

    const intervalo = setInterval(() => {
        const agora = Date.now(); // Mais performático que new Date().getTime()
        const distancia = CONFIG_AGRINHO.DATA_LIMITE - agora;

        if (distancia < 0) {
            clearInterval(intervalo);
            const mensagemEncerrado = "Inscrições Encerradas!";
            
            if (elementoHtml) elementoHtml.textContent = mensagemEncerrado;
            console.log(mensagemEncerrado);
            return;
        }

        // Cálculos de tempo otimizados com atribuição via desestruturação
        const dias = Math.floor(distancia / 86400000);
        const horas = Math.floor((distancia % 86400000) / 3600000);
        const minutos = Math.floor((distancia % 3600000) / 60000);
        const segundos = Math.floor((distancia % 60000) / 1000);

        const textoContador = `Inscrições Agrinho 2026 fecham em: ${dias}d ${horas}h ${minutos}m ${segundos}s`;

        // Se houver um elemento na tela, atualiza a interface, senão mantém no console
        if (elementoHtml) {
            elementoHtml.textContent = textoContador;
        } else {
            console.log(textoContador);
        }
    }, 1000);
}

// ==========================================
// 2. INTERATIVIDADE NAS CATEGORIAS (ALERT)
// ==========================================
/**
 * Exibe detalhes da categoria selecionada.
 * Otimização: Substituição do Switch/Case por um Objeto Literal (Dicionário), que é mais limpo e rápido.
 * @param {string} nome
