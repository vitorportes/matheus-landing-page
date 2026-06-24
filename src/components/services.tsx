"use client"
import React, { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" />
  </svg>
)

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

  // Handle scroll lock and browser history back button modal closure
  React.useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden"
      if (window.location.hash !== "#servico") {
        window.history.pushState({ modalOpen: "service" }, "", "#servico")
      }
    } else {
      document.body.style.overflow = "unset"
      if (window.location.hash === "#servico") {
        window.history.back()
      }
    }

    const handlePopState = () => {
      if (selectedService) {
        setSelectedService(null)
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [selectedService])

  return (
    <section id="servicos" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Nossas Áreas</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Saiba como nosso escritório pode te ajudar de forma rápida</h2>
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
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

              <div className="p-6 pt-0 flex justify-center w-full relative z-10">
                <a
                  href={`https://wa.me/5521997282115?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 h-12 px-6 w-full max-w-[280px] text-sm font-bold shadow-md hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white border-none cursor-pointer"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Falar no WhatsApp
                </a>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-300">
          <div 
            className="bg-background border border-border shadow-2xl rounded-3xl max-w-2xl w-full my-auto overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500"
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
                  sizes="(max-width: 768px) 100vw, 672px"
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
                  href={`https://wa.me/5521997282115?text=${encodeURIComponent(selectedService.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="h-14 px-8 rounded-xl font-bold text-lg gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white cursor-pointer">
                    <WhatsAppIcon className="h-6 w-6" />
                    Falar no WhatsApp
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
