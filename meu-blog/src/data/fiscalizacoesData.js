// src/data/fiscalizacoesData.js
export const fiscalizacoesData = [
  {
    id: "f1",
    title: "Fiscalização de Obras na UPA",
    date: "2025-10-15",
    local: "UPA Belo Vale",
    category: "Saúde",
    status: "Concluída",
    summary: "Vistoria das obras de ampliação da UPA Belo Vale e verificação do cronograma.",
    details: `Fiscalização realizada na Unidade de Pronto Atendimento do Belo Vale para 
    acompanhar o andamento das obras de ampliação. Foram verificados:
    
    • Cronograma de execução
    • Qualidade dos materiais empregados
    • Conformidade com o projeto
    • Condições de trabalho
    • Impacto no atendimento

    Durante a vistoria, foram identificados alguns pontos que precisam de atenção
    e já foram encaminhados à Secretaria de Obras.`,
    photos: [
      "galeria-1.png",
      "galeria-2.jpeg",
      "galeria-3.jpeg",
      "galeria-4.jpeg"
    ],
    findings: [
      "Atraso de 15 dias no cronograma",
      "Necessidade de reforço na equipe",
      "Ajustes necessários no projeto hidráulico"
    ],
    recommendations: [
      "Aumentar equipe de trabalho",
      "Revisar projeto hidráulico",
      "Acelerar entrega de materiais"
    ],
    participants: [
      "Vereador Leôncio Lopes",
      "Eng. Roberto Silva - Secretaria de Obras",
      "Dr. Maria Santos - Diretora UPA",
      "Conselho Municipal de Saúde"
    ]
  },
  {
    id: "f2",
    title: "Vistoria em Escolas Municipais",
    date: "2025-09-28",
    local: "Diversas escolas",
    category: "Educação",
    status: "Em andamento",
    summary: "Fiscalização das condições estruturais e de alimentação em escolas municipais.",
    details: `Vistoria realizada em 5 escolas municipais para verificar:

    • Condições estruturais dos prédios
    • Qualidade da merenda escolar
    • Estado dos equipamentos
    • Acessibilidade
    • Segurança

    Foram identificadas necessidades de manutenção em algumas unidades e já está
    sendo elaborado um relatório detalhado para encaminhamento à Secretaria de Educação.`,
    photos: [
      "galeria-1.png",
      "galeria-2.jpeg",
      "galeria-3.jpeg", 
      "galeria-4.jpeg"
    ],
    findings: [
      "Infiltrações em duas escolas",
      "Necessidade de reforma em playground",
      "Equipamentos de cozinha precisando de manutenção"
    ],
    recommendations: [
      "Manutenção preventiva regular",
      "Reforma dos playgrounds",
      "Atualização dos equipamentos de cozinha"
    ],
    participants: [
      "Vereador Leôncio Lopes",
      "Secretária de Educação",
      "Conselho de Alimentação Escolar",
      "Diretores das escolas visitadas"
    ]
  }
];