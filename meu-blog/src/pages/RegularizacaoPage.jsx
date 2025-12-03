import { FileText, CheckCircle, MapPin } from 'lucide-react';
import Container from '../components/ui/Container';
import PageTitle from '../components/ui/PageTitle';
import Card from '../components/ui/Card';

const RegularizacaoPage = () => {
  const documentosNecessarios = [
    "RG e CPF do proprietário",
    "Certidão de Casamento (se for o caso)",
    "Comprovante de residência atualizado",
    "Documento que comprove a posse do imóvel (contrato de compra e venda, escritura, recibo, etc.)",
    "IPTU atualizado ou carnê de pagamento",
    "Planta ou croqui do imóvel (se disponível)",
    "Certidões negativas (Distribuição Cível e Criminal)"
  ];

  const bairrosIniciados = [
    "Cidade de Deus",
    "Santa Felicidade",
    "Padre Teodoro",
    "Verde Vale"
  ];

  const etapasProcesso = [
    {
      numero: 1,
      titulo: "Cadastro Inicial",
      descricao: "O morador deve procurar o setor responsável pela regularização fundiária na Prefeitura com os documentos básicos de identificação e comprovação de posse."
    },
    {
      numero: 2,
      titulo: "Análise Documental",
      descricao: "A equipe técnica irá analisar toda a documentação apresentada, verificar a situação do imóvel e orientar sobre eventuais documentos complementares necessários."
    },
    {
      numero: 3,
      titulo: "Levantamento Topográfico",
      descricao: "Será realizado o levantamento topográfico do imóvel para identificar suas características físicas, dimensões e confrontações."
    },
    {
      numero: 4,
      titulo: "Processo Administrativo",
      descricao: "Abertura do processo de regularização fundiária junto aos órgãos competentes, com toda a documentação técnica e jurídica necessária."
    },
    {
      numero: 5,
      titulo: "Aprovação e Registro",
      descricao: "Após aprovação do projeto de regularização, o título de propriedade será emitido e registrado no Cartório de Registro de Imóveis."
    }
  ];

  return (
    <div className="py-10">
      <Container>
        <PageTitle 
          icon={FileText}
          title="Regularização"
          subtitle="Entenda o processo, documentos necessários e bairros atendidos"
        />

      {/* Introdução */}
      <Card className="mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">O que é Regularização Imobiliária?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A regularização imobiliária, também conhecida como regularização fundiária, é o processo pelo qual moradores 
            de áreas irregulares podem obter o título de propriedade de seus imóveis. Este processo garante segurança 
            jurídica, acesso a financiamentos e melhorias na qualidade de vida da população.
          </p>
          <p className="text-gray-700 leading-relaxed">
            O Vereador Leôncio Lopes tem atuado ativamente para viabilizar a regularização imobiliária em diversos 
            bairros de Sete Lagoas, acompanhando os processos junto à Prefeitura e orientando os moradores sobre 
            seus direitos e os procedimentos necessários.
          </p>
        </div>
      </Card>

      {/* Como funciona o processo */}
      <Card className="mb-8">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Como Funciona o Processo</h2>
          </div>
          
          <div className="space-y-6">
            {etapasProcesso.map((etapa) => (
              <div key={etapa.numero} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {etapa.numero}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{etapa.titulo}</h3>
                  <p className="text-gray-700 leading-relaxed">{etapa.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Importante:</strong> O processo de regularização fundiária é gratuito e todo o acompanhamento 
              pode ser feito através do nosso mandato. Entre em contato para mais informações e orientações.
            </p>
          </div>
        </div>
      </Card>

      {/* Documentos Necessários */}
      <Card className="mb-8">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Documentos Necessários</h2>
          </div>

          <p className="text-gray-700 mb-4">
            Para iniciar o processo de regularização, o morador deve providenciar os seguintes documentos:
          </p>

          <ul className="space-y-3">
            {documentosNecessarios.map((doc, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Observação:</strong> Dependendo da situação específica de cada imóvel, documentos adicionais 
              podem ser solicitados pela equipe técnica durante a análise do processo.
            </p>
          </div>
        </div>
      </Card>

      {/* Bairros que já iniciaram */}
      <Card>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-800">Bairros com Mutirão de Regularização</h2>
          </div>

          <p className="text-gray-700 mb-4">
            Os seguintes bairros de Sete Lagoas já iniciaram o processo de mutirão para regularização imobiliária:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {bairrosIniciados.map((bairro, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{bairro}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm text-emerald-800">
              <strong>Seu bairro não está na lista?</strong> Entre em contato com nosso mandato para verificar a 
              possibilidade de incluir sua região no próximo mutirão de regularização. Estamos trabalhando 
              constantemente para expandir o programa para mais áreas do município.
            </p>
          </div>
        </div>
      </Card>
      </Container>
    </div>
  );
};

export default RegularizacaoPage;
