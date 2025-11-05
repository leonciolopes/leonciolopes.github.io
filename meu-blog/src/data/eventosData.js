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
      "Audiência Pública realizada no Plenário da Câmara Municipal para discutir os desafios e oportunidades do mercado imobiliário em Sete Lagoas. O evento reuniu especialistas, representantes do poder público e da sociedade civil para debater temas como regularização fundiária, planejamento urbano e políticas habitacionais.",
    photos: [
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&auto=format", // Plenário
      "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&auto=format", // Pessoas em reunião
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format", // Debate
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format"  // Participantes
    ],
    schedule: [
      { time: "14:00", activity: "Credenciamento" },
      { time: "14:30", activity: "Abertura oficial - Presidente da Câmara" },
      { time: "15:00", activity: "Painel 1: Cenário atual do mercado imobiliário em Sete Lagoas" },
      { time: "15:45", activity: "Painel 2: Desafios da regularização fundiária" },
      { time: "16:30", activity: "Intervalo" },
      { time: "16:45", activity: "Painel 3: Propostas e soluções" },
      { time: "17:30", activity: "Debates e perguntas do público" },
      { time: "18:30", activity: "Encerramento e encaminhamentos" }
    ],
    participants: [
      "João Silva - Presidente da Câmara Municipal",
      "Maria Santos - Secretária Municipal de Desenvolvimento Urbano",
      "Dr. Pedro Oliveira - Presidente do CRECI-MG",
      "Eng. Ana Costa - Conselho de Arquitetura e Urbanismo",
      "Roberto Almeida - Associação dos Moradores",
      "Dra. Carla Mendes - Defensoria Pública",
      "Lucas Ferreira - Sindicato da Construção Civil"
    ],
    attendees: 150,
    attendeesText: "Mais de 150 participantes"
  },
];