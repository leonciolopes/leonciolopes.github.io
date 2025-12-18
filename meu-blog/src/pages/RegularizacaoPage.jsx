import { FileText, MapPin } from 'lucide-react';
import Container from '../components/ui/Container';
import PageTitle from '../components/ui/PageTitle';
import Card from '../components/ui/Card';

const RegularizacaoPage = () => {
  const bairrosIniciados = [
    "Cidade de Deus",
    "Santa Felicidade",
    "Padre Teodoro",
    "Verde Vale"
  ];

  return (
    <div className="py-10">
      <Container>
        <PageTitle 
          icon={FileText}
          title="Regularização"
          subtitle="Informações e bairros atendidos"
        />

      {/* Introdução */}
      <Card className="mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Regularização Imobiliária</h2>
          <p
            className="mt-2 text-base leading-relaxed text-gray-700 text-justify"
            style={{ textAlign: "justify" }}
          >
            <strong>Regularização imobiliária</strong> é o conjunto de procedimentos legais e administrativos que adequa um imóvel — seja <strong>rural ou urbano</strong> — à <strong>legislação vigente</strong>. Na prática, significa colocar em ordem a situação <strong>física, documental e jurídica</strong> do imóvel, garantindo conformidade com os órgãos competentes: <strong>Prefeitura</strong>, <strong>Cartório de Registro de Imóveis</strong> e <strong>Receita Federal</strong>.
            <br />
            <br />
            Todo imóvel se enquadra em um de dois cenários:
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• <strong>Imóvel legalizado sem transferência</strong>: o lote pertence a um <strong>loteamento devidamente registrado</strong>, porém ainda não foi transferido para o verdadeiro possuidor ou comprador. Nesses casos, é necessário iniciar o <strong>procedimento de transferência de propriedade</strong> junto ao cartório para regularizar a posse em seu nome.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• <strong>Imóvel irregular</strong>: ocupações, loteamentos irregulares ou terrenos sem registro no cartório competente. Nesses casos, o ocupante ou possuidor deve iniciar o processo de <strong>Regularização Fundiária Urbana (Reurb)</strong>, que legaliza a situação do imóvel.
            <br />
            <br />
            Com a regularização, o morador passa a usufruir de <strong>segurança jurídica</strong>, <strong>acesso a financiamentos imobiliários</strong>, <strong>direito de herança</strong> e <strong>maior valorização do imóvel</strong>. O vereador <strong>Leôncio Lopes</strong> trabalha ativamente para viabilizar a regularização em diversos bairros de Sete Lagoas, acompanhando os processos junto à Prefeitura e demais órgãos, orientando os moradores sobre seus direitos e encaminhando-os aos procedimentos necessários.
            <br />
            <br />
            Precisa regularizar seu imóvel? <strong>Procure nosso gabinete</strong> — será um prazer orientar você em cada etapa do processo.
          </p>
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
