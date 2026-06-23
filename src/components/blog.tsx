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
      <p>A rescisão indireta ocorre quando o empregador comete uma falta grave contra o empregado, tornando inviável a manutenção do vínculo trabalhista. Funciona como uma 'justa causa' aplicada pelo trabalhador ao patrão.</p>
      
      <h3>Motivos Comuns para Solicitação</h3>
      <p>A lei elenca diversos atos graves que justificam essa demissão forçada do empregador:</p>
      <ul>
        <li>Atraso recorrente no pagamento dos salários ou recolhimento do FGTS;</li>
        <li>Exigência de serviços superiores às forças do trabalhador, proibidos por lei ou contrários aos bons costumes;</li>
        <li>Tratamento excessivamente rigoroso por parte do empregador ou superiores hierárquicos;</li>
        <li>Não cumprimento das obrigações do contrato de trabalho (como a ausência de equipamentos de proteção individual);</li>
        <li>Prática de violência moral, assédio ou perseguição direta.</li>
      </ul>

      <h3>Quais são os Direitos Garantidos?</h3>
      <p>Caso a Justiça do Trabalho reconheça a falta patronal grave e declare a rescisão indireta, o trabalhador é dispensado sem justo motivo legal. Por isso, tem direito a receber todas as verbas rescisórias equivalentes a uma demissão imotivada:</p>
      <ul>
        <li>Saldo de salário dos dias trabalhados;</li>
        <li>Aviso prévio proporcional indenizado;</li>
        <li>13º salário proporcional e férias vencidas e proporcionais + 1/3 constitucional;</li>
        <li>Levantamento dos depósitos do FGTS;</li>
        <li>Multa indenizatória de 40% sobre o saldo integral do FGTS;</li>
        <li>Guias para habilitação no programa de Seguro-Desemprego.</li>
      </ul>
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
      <p>A regulamentação do teletrabalho (ou home office) passou por importantes atualizações legislativas nos últimos anos, visando dar maior clareza e segurança jurídica às relações de trabalho remotas ou híbridas.</p>
      
      <h3>Responsabilidade por Custos e Infraestrutura</h3>
      <p>A aquisição, manutenção e o fornecimento dos equipamentos tecnológicos e da infraestrutura necessária para o trabalho remoto devem ser negociados e expressamente previstos em contrato escrito.</p>
      <p>O reembolso de despesas adicionais pagas pelo trabalhador (como aumento na conta de energia ou de internet) não possui natureza salarial direta, devendo ser acordado por escrito para evitar passivos trabalhistas.</p>

      <h3>Controle de Jornada no Home Office</h3>
      <p>Hoje, a legislação trabalhista prevê que os funcionários em teletrabalho que recebem remuneração por hora ou cuja jornada possa ser monitorada estão sujeitos às regras de controle de horário convencional.</p>
      <p>Isso assegura o direito constitucional do trabalhador ao recebimento de horas extras caso ultrapasse a jornada contratual diária ou semanal.</p>
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
      <p>O trabalhador autônomo atua sem subordinação jurídica, assumindo os próprios riscos de sua atividade econômica. Contudo, isso não significa que ele não tenha direitos contratuais ou que esteja desamparado juridicamente.</p>
      
      <h3>A Importância do Contrato de Prestação de Serviços</h3>
      <p>Para resguardar os seus direitos comerciais e intelectuais, o autônomo deve sempre atuar amparado por um contrato robusto. O documento deve detalhar:</p>
      <ul>
        <li>Escopo específico e detalhado do serviço a ser prestado;</li>
        <li>Prazos exatos de entrega e cronograma de etapas;</li>
        <li>Valores, condições de pagamento e multas em caso de atraso;</li>
        <li>Regras sobre rescisão, quebra contratual antecipada e propriedade intelectual.</li>
      </ul>

      <h3>Prevenção contra o Vínculo Empregatício Oculto</h3>
      <p>Se o profissional classificado como autônomo for obrigado a cumprir horários rígidos e ordens diretas constantes, além de atuar com pessoalidade e habitualidade exclusivas para o mesmo tomador, a relação pode ser considerada como vínculo empregatício disfarçado pela Justiça do Trabalho.</p>
      <p>Nesses cenários, o trabalhador pode ingressar judicialmente para ter sua carteira assinada retroativamente e receber todos os direitos celetistas devidos.</p>
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
