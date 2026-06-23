"use client"
import React, { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Entrar com uma ação trabalhista",
    description: "Teve seus direitos desrespeitados? Avaliamos seu caso detalhadamente para garantir tudo o que a lei lhe assegura.",
    fullDescription: "Se você foi demitido, não recebeu suas verbas rescisórias, trabalhou sem registro em carteira, ou sofreu abusos no ambiente de trabalho (como assédio moral ou desvio de função), nós ajudamos você a buscar a devida reparação na Justiça do Trabalho. Atuamos de forma ágil, segura e com foco total em garantir os seus direitos.",
    benefits: ["Reivindicação de Horas Extras e FGTS", "Reversão de Justa Causa", "Indenização por Assédio/Danos Morais", "Reconhecimento de Vínculo de Emprego"],
    image: "/assets/images/servico-acao-trabalhista.jpg",
    whatsappMsg: "Olá, gostaria de falar sobre como entrar com uma ação trabalhista.",
  },
  {
    title: "Calcular minhas verbas trabalhistas",
    description: "Realizamos cálculos precisos e detalhados de rescisão, férias, 13º e horas extras para você não perder nenhum centavo.",
    fullDescription: "Muitas empresas cometem erros na hora de calcular a rescisão contratual. Oferecemos um serviço especializado de cálculo e auditoria de verbas rescisórias, avaliando detalhadamente férias vencidas/proporcionais, 13º salário, aviso prévio, saldo de salário, FGTS e multa de 40%.",
    benefits: ["Cálculo Rescisório Detalhado", "Cálculo de Horas Extras Acumuladas", "Auditoria de FGTS e Multas", "Simulação de Acordo Trabalhista"],
    image: "/assets/images/servico-calcular-verbas.jpg",
    whatsappMsg: "Olá, gostaria de realizar o cálculo das minhas verbas trabalhistas.",
  },
  {
    title: "Consultoria para a minha empresa",
    description: "Assessoria jurídica preventiva trabalhista para mitigar riscos, elaborar contratos seguros e evitar passivos judiciais.",
    fullDescription: "Evite processos trabalhistas antes mesmo que eles aconteçam. Nossa assessoria jurídica preventiva para empresas ajuda a estruturar contratos de trabalho robustos, adequar o negócio às normas de segurança, planejar demissões de forma segura e negociar acordos coletivos favoráveis, mitigando riscos financeiros.",
    benefits: ["Prevenção de Processos Trabalhistas", "Elaboração de Contratos Blindados", "Auditoria de Práticas Trabalhistas", "Defesa em Ações Judiciais e Multas"],
    image: "/assets/images/servico-consultoria-empresa.jpg",
    whatsappMsg: "Olá, gostaria de uma consultoria trabalhista para a minha empresa.",
  },
]

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <section id="servicos" className="py-24 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Nossas Áreas</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Expertise que faz a diferença</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Atuação técnica e de alta conversão focada em resultados reais para garantir seus direitos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-border/40 bg-background overflow-hidden cursor-pointer flex flex-col justify-between rounded-2xl"
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ArrowUpRight className="h-6 w-6 text-white bg-primary/80 backdrop-blur-sm rounded-full p-1" />
                </div>
                
                {/* Image container touching borders and clipped by rounded corners */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base pt-3 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button className="text-sm font-bold text-primary inline-flex items-center gap-2 group/btn cursor-pointer">
                  Falar com Especialista
                  <span className="h-px w-6 bg-primary transform origin-left transition-transform group-hover/btn:scale-x-150" />
                </button>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-background border border-border shadow-2xl rounded-3xl max-w-2xl w-full overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8 md:p-12">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-8 shadow-sm">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">{selectedService.title}</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {selectedService.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(selectedService.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="h-14 px-8 rounded-xl font-bold text-lg gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.08-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Falar com Especialista
                  </Button>
                </a>
                <Button variant="outline" onClick={() => setSelectedService(null)} className="h-14 px-8 rounded-xl font-bold text-lg flex-1 cursor-pointer">
                  Fechar
                </Button>
              </div>
            </div>
          </div>
          {/* Backdrop click close */}
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedService(null)} />
        </div>
      )}
    </section>
  )
}
