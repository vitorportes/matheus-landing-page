import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Scale, Award, MapPin } from "lucide-react"

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

export function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-0 lg:pt-28 overflow-hidden flex flex-col justify-end bg-[#0F163A]">
      {/* Background image covering the section */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/assets/images/fundo-hero-section.jpg')" }} 
      />
      {/* Deep Navy Blue overlay with controlled opacity and blur filter */}
      <div className="absolute inset-0 bg-[#0F163A]/80 backdrop-blur-[6px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-end w-full pt-6">
          
          {/* Left Column: Texts and CTAs (lg:col-span-6) */}
          <div className="pb-4 lg:pb-16 pt-2 text-[#FFFBF8] lg:col-span-6 text-left flex flex-col justify-center lg:self-center">
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFBF8]/10 border border-[#FFFBF8]/20 text-[#FFFBF8] text-xs font-bold mb-3.5 uppercase tracking-[0.2em] w-fit shadow-sm backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Especialista em Direito do Trabalho</span>
            </div>

            {/* Impact Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3.5 leading-[1.15]">
              Seus direitos trabalhistas têm um advogado <span className="text-emerald-400 italic font-serif font-semibold">pronto para defendê-los</span>.
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#FFFBF8]/85 mb-5 max-w-2xl leading-relaxed">
              Atendimento online, especializado e sem burocracia para trabalhadores e empresas em todo o Brasil.
            </p>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a 
                href="https://wa.me/5521997282115?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20com%20o%20Dr.%20Matheus."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="h-16 px-10 text-lg font-bold shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/30 transition-all rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white border-none cursor-pointer w-full justify-center gap-2">
                  <WhatsAppIcon className="h-7 w-7" />
                  Fale agora com um advogado
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-6 gap-y-3 text-[#FFFBF8]/60 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <Scale className="h-4.5 w-4.5 text-emerald-400/80" />
                <span className="text-xs font-bold uppercase tracking-widest">Justiça Ética</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-emerald-400/80" />
                <span className="text-xs font-bold uppercase tracking-widest">Excelência Jurídica</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4.5 w-4.5 text-emerald-400/80" />
                <span className="text-xs font-bold uppercase tracking-widest">Atendimento Nacional</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Image (lg:col-span-6) */}
          {/* Mantém o container alinhado estritamente à base */}
          <div className="w-full lg:col-span-6 flex justify-center lg:justify-end items-end relative lg:self-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[560px] h-[350px] sm:h-[450px] lg:h-[600px] flex items-end">
              <Image
              src="/assets/images/hero-matheus.png"
              alt="Matheus Cassiano"
              fill
              priority
              className="object-contain object-bottom select-none pointer-events-none"
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 440px, 560px"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
