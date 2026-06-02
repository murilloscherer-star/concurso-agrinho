// ==========================================
// 1. CONTAGEM REGRESSIVA PARA AS INSCRIÇÕES
// ==========================================
function iniciarContagemRegressiva() {
    // Define a data limite: 31 de Agosto de 2026 às 23:59:59
    const dataLimite = new Date("August 31, 2026 23:59:59").getTime();

    // Atualiza o contador a cada 1 segundo
    const intervalo = setInterval(function() {
        const agora = new Date().getTime();
        const distancia = dataLimite - agora;

        // Cálculos de tempo para dias, horas, minutos e segundos
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Exibe o resultado no console (ou você pode injetar no HTML)
        console.log(`Inscrições Agrinho 2026 fecham em: ${dias}d ${horas}h ${minutos}m ${segundos}s`);

        // Se a contagem regressiva terminar
        if (distancia < 0) {
            clearInterval(intervalo);
            console.log("Inscrições Encerradas!");
        }
    }, 1000);
}


// ==========================================
// 2. INTERATIVIDADE NAS CATEGORIAS (ALERT)
// ==========================================
// Função para mostrar detalhes extras quando o usuário clica em uma categoria
function detalharCategoria(nomeCategoria) {
    let mensagem = "";

    switch (nomeCategoria.toLowerCase()) {
        case 'desenho':
            mensagem = "🎨 Categoria Desenho: Destinado a Alunos da Educação Infantil e 1º ano. O tema deve focar em sustentabilidade.";
            break;
        case 'redacao':
            mensagem = "✍️ Categoria Redação: Do 2º ao 9º ano e Ensino Médio. Gêneros textuais variam de acordo com o ano escolar.";
            break;
        case 'professor':
            mensagem = "👩‍🏫 Experiência Pedagógica: Relatos de projetos práticos aplicados em sala de aula com a comunidade.";
            break;
        default:
            mensagem = "🌱 Participe do Agrinho 2026 e mude a realidade da sua comunidade!";
    }

    alert(mensagem);
}


// ==========================================
// 3. VALIDAÇÃO SIMPLES DE FORMULÁRIO
// ==========================================
function validarInscricao(nomeCompleto, email, categoriaSelecionada) {
    // Remove espaços em branco nas pontas
    if (nomeCompleto.trim() === "" || email.trim() === "") {
        console.error("Erro: Todos os campos são obrigatórios.");
        return false;
    }

    // Validação básica de formato de e-mail
    if (!email.includes("@") || !email.includes(".")) {
        console.error("Erro: Por favor, insira um e-mail válido.");
        return false;
    }

    console.log(`✅ Sucesso! Pré-inscrição realizada para ${nomeCompleto} na categoria ${categoriaSelecionada}.`);
    return true;
}

// ==========================================
// EXECUÇÃO INICIAL (TESTES)
// ==========================================
// Inicia o relógio regressivo automaticamente ao carregar o script
iniciarContagemRegressiva();

// Exemplo de teste da validação no console do navegador
validarInscricao("Maria Silva", "maria.prof@escola.com", "Experiência Pedagógica");
