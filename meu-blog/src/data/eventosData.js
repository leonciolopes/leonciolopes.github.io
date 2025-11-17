// src/data/eventosData.js
export const eventosData = [
  {
     // MUTIRÃO DE CONSULTAS OFTALMOLÓGICAS GRATUITAS
    id: "e1",
    title: "Mutirão de Consultas Oftalmológicas Gratuitas",
    date: "2025-11-10",
    local: "Praça Central",
    summary: "Atendimento oftalmológico gratuito para a população; senhas por ordem de chegada. Além das consultas, foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
    details:
      "Equipe de oftalmologistas e técnicos realizará triagem, exame visual e encaminhamentos quando necessário. Leve documento com foto. Além das consultas oftalmológicas, durante as ações a população também teve acesso a orientações jurídicas, orientações nutricionais, aferição de pressão arterial e glicose e vacinação.",
    services: [
      "Orientações jurídicas",
      "Orientações nutricionais",
      "Aferição de pressão e glicose",
      "Vacinação"
    ],
    sessions: [
      {
        id: "e1-s1",
        date: "2025-06-06",
        time: "09:00",
        local: "Comunidade Cristã Amar - A. Suíça, nº 1888, bairro Orozimbo Macedo",
        attendees: 380,
        attendeesText: "+280 atendimentos feitos",
        foodCollectedKg: 600,
        partner: "Vereador Marcelo Cooperseltta",
        summary: "Triagem e atendimento oftalmológico em parceria com vereadores e equipe local.",
        details:
          "Evento realizado em parceria com o Vereador Marcelo Cooperseltta; cerca de 380 atendimentos e aproximadamente 600kg de alimentos arrecadados para doação. Além das consultas oftalmológicas, também foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
      },
      {
        id: "e1-s2",
        date: "2025-07-05",
        time: "09:00",
        local: "Sindicato dos Trabalhadores - Rua das Violetas, nº 38, bairro Catarina",
        summary: "Audiência aberta para debater questões do mercado imobiliário local com participação da comunidade.",
        details:
          "Discussão sobre o mercado imobiliário, impactos no planejamento urbano e espaço para perguntas ao poder público e especialistas. Aberto ao público.",
        // Fotos, cronograma e participantes — podem ser preenchidos com URLs/entradas reais
        photos: [
          // Exemplo: '/src/assets/img/eventos/audiencia-1.jpg'
        ],
        schedule: [
          { time: "09:00", activity: "Abertura e boas-vindas" },
          { time: "09:30", activity: "Painel: Desafios do mercado imobiliário" },
          { time: "10:30", activity: "Perguntas e participação da comunidade" },
          { time: "11:30", activity: "Encerramento" },
        ],
        participants: [
          "Presidente da Câmara",
          "Secretário Municipal de Urbanismo",
          "Representantes do Conselho de Habitação",
          "Lideranças comunitárias locais",
        ],
        partner: "Vereador Rodrigo Braga",
        summary: "Atendimento oftalmológico e arrecadação de alimentos em parceria com o sindicato local.",
        details:
          "Evento realizado em parceria com o Vereador Rodrigo Braga; cerca de 150 atendimentos e aproximadamente 300kg de alimentos arrecadados para doação. Além das consultas oftalmológicas, também foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
      },
      {
        id: "e1-s3",
        date: "2025-07-19",
        time: "09:00",
        local: "Igreja Aliança Absoluta - Rua Irmã Flavia, Nº 70, bairro Monte Carlo",
        attendees: 180,
        attendeesText: "+180 atendimentos feitos",
        foodCollectedKg: 380,
        partner: "Vereador Alber Enfermeiro",
        summary: "Triagem e atendimento oftalmológico em parceria com vereadores e equipe local.",
        details:
          "Evento realizado em parceria com o Vereador Alber Enfermeiro; mais de 180 atendimentos realizados e cerca de 380kg de alimentos arrecadados para doação. Além das consultas oftalmológicas, também foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
      },
      {
        id: "e1-s4",
        date: "2025-08-15",
        time: "09:00",
        local: "Praça do Campo do Montreal - Rua dos Manacás, nº 780, bairro Montreal",
        attendees: 280,
        attendeesText: "+280 atendimentos feitos",
        foodCollectedKg: 560,
        partner: "Vereador Marcelo Cooperseltta",
        summary: "Triagem e atendimento oftalmológico em parceria com vereadores e equipe local.",
        details:
          "Evento realizado em parceria com o Vereador Marcelo Cooperseltta; cerca de 280 atendimentos e aproximadamente 560kg de alimentos arrecadados para doação. Além das consultas oftalmológicas, também foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
      },
      {
        id: "e1-s5",
        date: "2025-08-30",
        time: "09:00",
        local: "Sindicato dos Trabalhadores - Rua das Violetas, nº 38, bairro Catarina",
        attendees: 120,
        attendeesText: "+120 atendimentos feitos",
        foodCollectedKg: 240,
        partner: "Vereador Rodrigo Braga",
        summary: "Atendimento oftalmológico e arrecadação de alimentos em parceria com o sindicato local.",
        details:
          "Evento realizado em parceria com o Vereador Rodrigo Braga; cerca de 120 atendimentos e aproximadamente 240kg de alimentos arrecadados para doação. Além das consultas oftalmológicas, também foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
      },
      {
        id: "e1-s6",
        date: "2025-09-06",
        time: "09:00",
        local: "Paróquia Santa Luzia - Rua Matozinhos, nº 228, bairro Santa Luzia",
        attendees: 150,
        attendeesText: "+150 atendimentos feitos",
        foodCollectedKg: 300,
        partner: "Vereador Ivan Luiz",
        summary: "Mutirão de consultas com foco em triagem e encaminhamentos clínicos.",
        details:
          "Evento realizado em parceria com the Vereador Ivan Luiz; cerca de 150 atendimentos realizados e 300kg de alimentos arrecadados para doação. Além das consultas oftalmológicas, também foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
      },
      {
        id: "e1-s7",
        date: "2025-10-04",
        time: "09:00",
        local: "Igreja Nossa Senhora de Fátima - Rua Caxambú, nº 391, bairro Padre Teodoro",
        attendees: 110,
        attendeesText: "+110 atendimentos feitos",
        foodCollectedKg: 220,
        partner: null,
        summary: "Atendimento oftalmológico com foco na comunidade local.",
        details:
          "Realizado na Igreja Nossa Senhora de Fátima; aproximadamente 110 atendimentos e cerca de 220kg de alimentos arrecadados para doação. Além das consultas oftalmológicas, também foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
      },
      {
        id: "e1-s8",
        date: "2025-10-11",
        time: "09:00",
        local: "Igreja Sagrada Família - Rua Ângelo Marcelo Paoli, nº 825, bairro Luxemburgo",
        attendees: 100,
        attendeesText: "+10 atendimentos feitos",
        foodCollectedKg: 200,
        partner: null,
        summary: "Atendimento oftalmológico com foco na comunidade local.",
        details:
          "Realizado na Igreja Sagrada Família; aproximadamente 100 atendimentos e cerca de 200kg de alimentos arrecadados para doação. Além das consultas oftalmológicas, também foram oferecidos orientações jurídicas, nutricionais, aferição de pressão e glicose e vacinação.",
      },
    ],
  },
 
  // AUDIÊNCIA PÚBLICA - MERCADO IMOBILIÁRIO
  {
    id: "e2",
    title: "Audiência Pública: Mercado Imobiliário - Desafios e Soluções",
    date: "2025-08-19",
    local: "Câmara Municipal de Sete Lagoas",
    summary: "Audiência aberta para debater questões do mercado imobiliário local com participação da comunidade.",
    details:
      "Audiência Pública realizada no Plenário da Câmara Municipal de Sete Lagoas para discutir os desafios e oportunidades do mercado imobiliário em Sete Lagoas. O evento reuniu especialistas, representantes do poder público e da sociedade civil para debater desafios e soluções do mercado imobiliário no município de Sete Lagoas.",
    photos: [
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/1.jpeg", import.meta.url).href, caption: "Abertura do evento com Vereador Leôncio Lopes" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/2.jpeg", import.meta.url).href, caption: "Painel de especialistas em mercado imobiliário" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/3.jpeg", import.meta.url).href, caption: "Apresentação sobre desafios tributários" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/4.jpeg", import.meta.url).href, caption: "Discussão de impasses nas demandas imobiliárias" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/5.jpeg", import.meta.url).href, caption: "Realidade das imobiliárias em Sete Lagoas" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/6.jpeg", import.meta.url).href, caption: "Regularização fundiária urbana - cenário atual" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/7.jpeg", import.meta.url).href, caption: "Desenvolvimento sustentável e valorização imobiliária" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/8.jpeg", import.meta.url).href, caption: "Participantes acompanhando o debate" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/9.jpeg", import.meta.url).href, caption: "Público durante a audiência pública" },
      { src: new URL("../assets/img/audiencia-mercado-imobiliario/10.jpeg", import.meta.url).href, caption: "Encerramento e questionamentos do público" }
    ],
    schedule: [
      { time: "18:30", activity: "Recepção e Credenciamento" },
      { time: "19:00", activity: "Abertura pelo Cerimonial e Apresentação dos Palestrantes" },
      { time: "19:05", activity: "Vereador Leôncio Lopes: Abertura do Tema e Contextualização de sua Importância no Município de Sete Lagoas." },
      { time: "19:15", activity: "Dr. Leandro Alves da Costa: Desafios Tributários no Mercado Imobiliário - A Base de Cálculo do ITBI e Outras Controvérsias em Sete Lagoas." },
      { time: "19:45", activity: "Dra. Lorena Figueiredo: Impasses nas Demandas Extrajudiciais Imobiliárias em Sete Lagoas - Obstáculos Práticos e Propostas de Solução." },
      { time: "20:15", activity: "Jean Karllo: A Realidade das Imobiliárias em Sete Lagoas - Barreiras Operacionais e Perspectivas de Desenvolvimento." },
      { time: "20:45", activity: "Dr. José Antônio: Regularização Fundiária Urbana em Sete Lagoas - Cenário Atual, Desafios Jurídicos e Caminhos Possíveis." },
      { time: "21:15", activity: "José Valadares Bahia: Desenvolvimento Sustentável e Valorização Imobiliária - Caminhos para um Crescimento Ordenado em Sete Lagoas" },
      { time: "21:45", activity: "Encerramento" }
    ],
    participants: [
      "Leôncio Lopes - Vereador do município de Sete Lagoas",
      "Dr. Leandro Alves da Costa - Advogado Especialista no Ramo Imobiliário",
      "Dra. Lorena Figueiredo - Presidente da Comissão de Direito Imobiliário da OAB Sete Lagoas",
      "Jean Karllo - Empresário Corretor de Imóveis",
      "Dr. José Antônio - Advogado Especialista em Processos de Regularização Fundiária",
      "José Valadares Bahia - Secretário do Meio Ambiente",
    ],
    attendees: 50,
    attendeesText: "Mais de 50 participantes"
  },
];