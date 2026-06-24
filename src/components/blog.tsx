"use client"

import * as React from "react"
import Image from "next/image"
import { Calendar, ChevronRight, X, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "Rescisão indireta: Entenda quando o trabalhador pode solicitar e quais os direitos.",
    date: "15 Jun, 2026",
    category: "Trabalhista",
    readTime: "6 min",
    author: "Matheus Cassiano",
    image: "/assets/images/blog-rescisao-indireta.jpg",
    excerpt: "Descubra quando o trabalhador pode rescindir o contrato por falta grave da empresa e assegurar todas as verbas da demissão sem justa causa.",
    content: `
      <p>A rescisão indireta é um direito pouco conhecido, mas muito importante para o trabalhador. Trata-se de uma espécie de “demissão por justa causa’ ao contrário, onde é o empregado que solicita a rescisão contratual por conta de condutas inadequadas do empregador. Esta modalidade está prevista no artigo 483 da Consolidação das Leis do Trabalho (CLT), que lista as situações em que o empregado pode requerer a rescisão do contrato de trabalho sem perder seus direitos. A seguir, vamos entender melhor em quais casos ela pode ser solicitada e os direitos garantidos ao trabalhador.</p>

      <h3>Quando o Trabalhador Pode Solicitar a Rescisão Indireta?</h3>
      <p>A rescisão indireta pode ser solicitada em situações específicas nas quais o empregador não cumpre com suas obrigações legais ou contratuais. Entre os motivos mais comuns, estão a falta de pagamento de salários ou verbas como o Fundo de Garantia do Tempo de Serviço (FGTS) e o décimo terceiro salário. Atrasos constantes no pagamento também podem ser motivo para que o trabalhador solicite a rescisão. Outro motivo comum é a exigência de atividades incompatíveis com o cargo do trabalhador. Quando o empregador exige que o empregado execute funções que não fazem parte de seu contrato, o trabalhador pode alegar desvio de função, o que configura um dos motivos para a rescisão indireta. O mesmo ocorre em casos de assédio moral ou sexual, uma vez que essas situações colocam o trabalhador em um ambiente insalubre e prejudicial à sua integridade física e mental.</p>

      <h3>Direitos Garantidos ao Trabalhador na Rescisão Indireta</h3>
      <p>Quando o trabalhador opta pela rescisão indireta e ela é reconhecida pela Justiça do Trabalho, ele tem direito a receber todos os valores como se tivesse sido demitido sem justa causa. Isso inclui o pagamento das verbas rescisórias, como aviso prévio indenizado, saque do FGTS com a multa de 40%, férias proporcionais e vencidas com acréscimo de um terço, além do décimo terceiro salário proporcional. O trabalhador também tem direito ao seguro-desemprego, desde que atenda aos critérios exigidos, como o tempo mínimo de trabalho formal e o número de contribuições. A principal diferença em relação à demissão sem justa causa é que, na rescisão indireta, é o trabalhador que toma a iniciativa de romper o contrato, mas sem ser penalizado por isso. Ou seja, os direitos são preservados.</p>

      <h3>Procedimento para Solicitar a Rescisão Indireta</h3>
      <p>Para que o trabalhador possa solicitar a rescisão indireta, é importante seguir alguns passos. Primeiro, o ideal é reunir provas que sustentem as alegações contra o empregador. Isso pode incluir mensagens, e-mails, testemunhos de colegas de trabalho ou qualquer outro tipo de evidência que comprove a irregularidade cometida pelo empregador. Com essas provas em mãos, o trabalhador deve buscar a Justiça do Trabalho e ajuizar uma reclamação trabalhista. Durante o processo, o trabalhador pode optar por continuar trabalhando até que a Justiça decida sobre o caso, mas também pode se ausentar do trabalho, desde que a ausência seja devidamente justificada. Vale ressaltar que o processo judicial pode ser demorado, e o trabalhador precisa estar preparado para lidar com a burocracia envolvida.</p>

      <h3>Casos de Recusa de Rescisão Indireta pela Justiça</h3>
      <p>Nem todos os pedidos de rescisão indireta são aceitos pela Justiça do Trabalho. Em alguns casos, a Justiça pode entender que a situação relatada pelo trabalhador não configura um motivo grave o suficiente para a rescisão. Por isso, é fundamental que o trabalhador tenha uma base sólida de provas e um bom acompanhamento jurídico ao longo do processo. Um exemplo de situação que pode levar à recusa é quando o empregador, mesmo tendo cometido falhas, as corrige de forma rápida. Se, por exemplo, o pagamento dos salários atrasados for regularizado antes de o trabalhador ajuizar a reclamação, o juiz pode entender que não há motivo para a rescisão. Outro ponto de atenção são as provas: elas devem ser claras e consistentes, pois apenas alegações verbais podem não ser suficientes para convencer o juiz.</p>

      <p>A rescisão indireta é uma ferramenta importante para proteger o trabalhador de abusos e irregularidades cometidas pelo empregador. Conhecer os direitos e entender em quais situações ela pode ser solicitada é essencial para garantir que o trabalhador não seja prejudicado por atitudes irresponsáveis de seu empregador. Ao solicitar a rescisão, o trabalhador tem direito a todas as verbas rescisórias de uma demissão sem justa causa, além de proteção contra práticas inadequadas no ambiente de trabalho.</p>

      <p><strong>Precisa de ajuda com a rescisão indireta ou outras questões trabalhistas? Entre em contato com um advogado especializado para garantir seus direitos. Não espere, proteja-se contra abusos no ambiente de trabalho!</strong></p>
    `
  },
  {
    title: "Teletrabalho: direitos e deveres dos empregados e empregadores.",
    date: "10 Jun, 2026",
    category: "Trabalhista",
    readTime: "5 min",
    author: "Matheus Cassiano",
    image: "/assets/images/blog-teletrabalho.jpg",
    excerpt: "Entenda a regulamentação atualizada sobre o home office: controle de jornada, reembolso de despesas e deveres das partes.",
    content: `
      <p>O teletrabalho, também conhecido como trabalho remoto, se tornou uma realidade para muitas empresas e profissionais em decorrência das inovações tecnológicas e, mais recentemente, das necessidades impostas pela pandemia. Esse modelo de trabalho permite que as atividades laborais sejam realizadas fora das dependências da empresa, comumente na casa do empregado, por meio de ferramentas tecnológicas. Para que essa modalidade funcione de maneira eficiente e justa, é fundamental que os direitos e deveres de ambas as partes, empregados e empregadores, sejam claramente estabelecidos.</p>

      <h3>Direitos dos Empregados no Teletrabalho</h3>
      <p>Os empregados em regime de teletrabalho possuem direitos semelhantes aos trabalhadores presenciais. A CLT garante que os teletrabalhadores tenham os mesmos direitos relativos a salário, férias, 13º salário, e outros benefícios assegurados por lei. Isso significa que, mesmo trabalhando fora das dependências da empresa, o trabalhador deve ser remunerado adequadamente, inclusive recebendo os adicionais de insalubridade ou periculosidade, caso haja justificativa para isso. Um aspecto importante é a questão das horas extras. A legislação estabelece que, no teletrabalho, o controle de jornada não é obrigatório, exceto se houver acordo individual ou coletivo que estipule essa necessidade. Muitas empresas implementam sistemas de controle remoto da jornada de trabalho, permitindo a compensação de horas extras ou banco de horas. A empresa é responsável por fornecer os equipamentos e as condições adequadas para o desempenho das atividades, como computadores, softwares, e acesso à internet, quando não acordado de outra forma.</p>

      <h3>Deveres dos Empregados no Teletrabalho</h3>
      <p>Os deveres dos empregados em regime de teletrabalho também são um ponto crucial para o sucesso dessa modalidade. Primeiramente, o trabalhador deve se comprometer com a mesma disciplina e profissionalismo que teria no ambiente físico da empresa, respeitando os prazos e as entregas de trabalho combinadas. A falta de supervisão direta não deve ser vista como uma oportunidade para negligenciar as responsabilidades profissionais. O empregado tem a obrigação de manter os equipamentos fornecidos pela empresa em boas condições de uso. Caso haja descuidos que resultem em danos aos aparelhos, o trabalhador poderá ser responsabilizado. Outro dever importante é a participação em treinamentos de segurança do trabalho. Mesmo trabalhando em casa, o teletrabalhador deve ser orientado pela empresa sobre as normas de ergonomia, prevenindo problemas de saúde causados pelo ambiente inadequado de trabalho.</p>

      <h3>Direitos dos Empregadores no Teletrabalho</h3>
      <p>Os empregadores também possuem direitos importantes quando adotam o regime de teletrabalho. O primeiro deles é o direito de supervisionar as atividades realizadas pelo empregado, mesmo à distância. Com o uso de tecnologias como softwares de monitoramento e videoconferências, os gestores podem acompanhar o andamento dos projetos e manter a comunicação frequente com suas equipes, garantindo a produtividade. Outro direito do empregador é estabelecer as regras sobre o uso de equipamentos e ferramentas de trabalho. Embora seja obrigação do empregador fornecer os meios para que o trabalho remoto seja realizado, ele também pode estabelecer diretrizes sobre como esses equipamentos serão utilizados, como limitações no uso pessoal dos dispositivos da empresa. O empregador pode definir horários para reuniões e atendimentos, respeitando a flexibilidade do regime, mas mantendo a organização necessária para o funcionamento da equipe.</p>

      <h3>Deveres dos Empregadores no Teletrabalho</h3>
      <p>Os deveres dos empregadores no teletrabalho são fundamentais para garantir que os direitos dos empregados sejam respeitados. O primeiro deles é garantir que o empregado tenha todas as condições necessárias para realizar suas atividades de maneira segura e eficiente. Isso inclui fornecer os equipamentos adequados, como computadores e softwares, e, em alguns casos, subsidiar ou reembolsar despesas com internet e eletricidade. O empregador deve promover um ambiente de trabalho saudável, mesmo que virtualmente. Isso inclui respeitar os horários de descanso e evitar o contato com o empregado fora do expediente, a menos que haja uma situação emergencial. O teletrabalho não deve significar a disponibilidade total do trabalhador. Outro dever é garantir a segurança da informação, implementando sistemas que protejam os dados da empresa e dos clientes, evitando vazamentos de informações sensíveis.</p>

      <p>O teletrabalho traz muitos benefícios para empregados e empregadores, como a flexibilidade de horários, a economia de tempo com deslocamentos e a possibilidade de conciliar vida profissional e pessoal de maneira mais equilibrada. Para que essa modalidade seja eficiente e traga resultados positivos, é necessário que ambos os lados compreendam seus direitos e deveres de forma clara. A legislação brasileira já oferece uma base para regular o teletrabalho, mas cabe às empresas e aos trabalhadores ajustarem os detalhes de acordo com suas necessidades específicas, sempre com base em acordos que respeitem a CLT.</p>

      <p><strong>Precisa de orientação jurídica sobre teletrabalho? Fale com um advogado especializado! Garantimos o apoio necessário para proteger seus direitos e deveres no ambiente de trabalho remoto.</strong></p>
    `
  },
  {
    title: "Direitos dos trabalhadores autônomos: como garantir proteção jurídica.",
    date: "05 Jun, 2026",
    category: "Consultoria",
    readTime: "7 min",
    author: "Matheus Cassiano",
    image: "/assets/images/blog-autonomo.jpg",
    excerpt: "Como profissionais autônomos podem evitar riscos, formalizar contratos adequados e resguardar seus direitos frente a tomadores de serviço.",
    content: `
      <p>Os trabalhadores autônomos vêm crescendo significativamente no Brasil e no mundo, impulsionados pela flexibilização das relações de trabalho e pelo avanço das tecnologias que permitem trabalhar remotamente. Muitos desses profissionais ainda desconhecem seus direitos e as formas de garantir proteção jurídica. Embora a legislação brasileira ofereça suporte aos trabalhadores autônomos, entender como garantir essas proteções é essencial para evitar problemas futuros.</p>

      <h3>A Importância da Formalização do Trabalho Autônomo</h3>
      <p>A primeira forma de garantir proteção jurídica como trabalhador autônomo é por meio da formalização da atividade. Muitos profissionais optam por atuar de maneira informal, o que pode trazer complicações legais e dificultar o acesso a direitos e benefícios. A formalização, seja por meio de um CNPJ, como Microempreendedor Individual (MEI), ou como uma empresa maior, permite que o trabalhador tenha acesso a benefícios previdenciários, como aposentadoria e auxílio-doença. A formalização facilita o relacionamento com os clientes, pois contratos podem ser assinados de maneira mais clara e transparente. A emissão de notas fiscais também garante que o trabalho seja reconhecido oficialmente, o que oferece uma camada extra de segurança jurídica em caso de litígios. A formalização também contribui para a credibilidade do profissional no mercado.</p>

      <h3>A Importância dos Contratos para Garantir Direitos</h3>
      <p>Uma das ferramentas mais eficazes para proteger os direitos dos trabalhadores autônomos é o contrato de prestação de serviços. Este documento deve detalhar o escopo do trabalho, os prazos, os valores acordados e as condições de pagamento. Ele também pode prever multas em caso de descumprimento por qualquer uma das partes. Um contrato bem elaborado é essencial para evitar conflitos e assegurar que, em caso de disputas, o autônomo esteja protegido legalmente. É importante que esse contrato seja redigido de forma clara e que o trabalhador autônomo tenha conhecimento de todas as cláusulas antes de assinar. Em alguns casos, pode ser necessário contar com o apoio de um advogado para revisar o contrato e garantir que os direitos do autônomo sejam respeitados.</p>

      <h3>Contribuição Previdenciária e Acesso a Benefícios</h3>
      <p>Outro aspecto essencial para garantir proteção jurídica aos trabalhadores autônomos é a contribuição para o Instituto Nacional do Seguro Social (INSS). Muitos autônomos acreditam que, por não serem empregados formais, não têm direito a benefícios previdenciários, mas isso não é verdade. O profissional autônomo pode contribuir de maneira individual ao INSS e, assim, garantir o acesso a direitos como aposentadoria por idade ou tempo de contribuição, auxílio-doença, e salário-maternidade, entre outros. É necessário que o trabalhador faça sua inscrição no INSS e escolha a modalidade de contribuição mais adequada ao seu perfil. Existem diferentes categorias, como a de contribuição individual ou facultativa, que oferecem diferentes vantagens e alíquotas de contribuição. Cumprir com essas obrigações é fundamental para assegurar a tranquilidade financeira no futuro e garantir o acesso aos direitos previdenciários em momentos de necessidade.</p>

      <h3>Proteção Jurídica em Casos de Inadimplência</h3>
      <p>Um dos maiores desafios enfrentados por trabalhadores autônomos é a inadimplência de clientes. Quando o cliente não realiza o pagamento pelos serviços prestados, o trabalhador autônomo pode ficar em uma situação financeira delicada, sem recursos para cobrir suas despesas. Para se proteger nesses casos, é importante adotar medidas preventivas, como a assinatura de contratos, a solicitação de pagamentos parciais antecipados ou a inclusão de cláusulas de multa por atraso. Se, mesmo assim, o cliente não cumprir com o pagamento, o trabalhador autônomo pode recorrer ao Poder Judiciário. A cobrança pode ser feita por meio de um processo judicial, como a ação de cobrança ou, em alguns casos, por meio do protesto do título, como uma nota fiscal ou contrato assinado.</p>

      <h3>A Importância da Consultoria Jurídica Preventiva</h3>
      <p>Uma das formas mais eficazes de garantir proteção jurídica como trabalhador autônomo é a consultoria jurídica preventiva. Consultar um advogado especializado pode ajudar o autônomo a evitar problemas futuros, orientando sobre a melhor forma de formalizar sua atividade, redigir contratos, realizar contribuições previdenciárias e lidar com inadimplência. A consultoria jurídica preventiva tem como objetivo antecipar problemas e sugerir soluções antes que eles ocorram. Isso é especialmente importante para trabalhadores autônomos, que geralmente não contam com a assessoria jurídica interna, como acontece em grandes empresas.</p>

      <p>Garantir proteção jurídica como trabalhador autônomo é essencial para preservar direitos e evitar problemas futuros. A formalização da atividade, a elaboração de contratos detalhados, a contribuição previdenciária e o apoio jurídico preventivo são passos importantes para assegurar que o autônomo esteja protegido. Adotar medidas preventivas para lidar com inadimplência e outros desafios comuns no dia a dia pode garantir a continuidade do trabalho de forma mais segura e sustentável.</p>

      <p><strong>Para garantir sua proteção jurídica como autônomo, entre em contato com um advogado especializado. Não deixe seus direitos de lado!</strong></p>
    `
  },
]

export function Blog() {
  const [selectedPost, setSelectedPost] = React.useState<typeof posts[0] | null>(null)

  // Lock scroll when modal is open
  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [selectedPost])

  return (
    <section id="blog" className="py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Blog Jurídico</h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Informação de qualidade para garantir que você conheça e proteja seus direitos.
            </p>
          </div>
          <Button variant="outline" className="group cursor-pointer">
            Ver todos os posts 
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className="group flex flex-col border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-background justify-between rounded-2xl"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Blog Image touching borders and clipped by rounded corners */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
                
                <div className="h-1 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="p-6">
                  {/* Category & Read Time */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer content (pushed to bottom) */}
              <div className="px-6 pb-6 pt-0 flex flex-col gap-4 mt-auto">
                <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border/50 pt-4">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground/60" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold inline-flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                    Ler artigo completo <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          ></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border shadow-2xl rounded-xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="px-2 py-1 rounded-md bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                  {selectedPost.category}
                </div>
                <div className="h-4 w-px bg-border"></div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Clock className="h-3.5 w-3.5" /> {selectedPost.readTime} de leitura
                </div>
              </div>
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 sm:p-10 lg:p-12">
              <div className="max-w-2xl mx-auto">
                {/* Modal Post Image */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-8 shadow-sm">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{selectedPost.author}</p>
                    <p className="text-xs text-muted-foreground">{selectedPost.date}</p>
                  </div>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  {selectedPost.title}
                </h2>
                
                <div 
                  className="prose prose-slate dark:prose-invert max-w-none 
                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
                    [&_h3]:text-[#0F163A] [&_h3]:border-l-4 [&_h3]:border-[#0F163A] [&_h3]:pl-4 [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:font-bold
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
                    prose-li:text-muted-foreground prose-li:text-lg
                    prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
                
                <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
                  <p className="text-sm text-muted-foreground italic">
                    Gostou do conteúdo? Compartilhe com quem precisa saber disso.
                  </p>
                  <Button onClick={() => setSelectedPost(null)} className="cursor-pointer">
                    Fechar Artigo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
