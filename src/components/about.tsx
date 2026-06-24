import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-[40px] bg-secondary relative z-10 shadow-2xl">
               <Image
                 src="/assets/images/sobre-foto.jpg"
                 alt="Foto de perfil de Matheus Cassiano"
                 fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                 className="object-cover"
               />
            </div>
            {/* Decorative background blocks */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-1 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full -z-1 blur-3xl" />
            
            <div className="absolute -bottom-6 -left-6 bg-background p-8 rounded-3xl shadow-xl z-20 border border-border hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold font-serif text-primary leading-none mb-1">Rigor Técnico</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold leading-tight">Resguardo Jurídico</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">Perfil Profissional</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black mt-4 leading-tight">
                Matheus Cassiano <br />
                <span className="text-muted-foreground text-2xl font-sans block mt-2 font-normal">Advogado Trabalhista — OAB/RJ 218.906</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
              <p>
                <strong className="text-foreground">Matheus Cassiano</strong> é advogado com sólida especialização na área trabalhista. Sua atuação é pautada pelo rigor técnico e por uma conduta estritamente ética na condução de litígios e na assessoria jurídica preventiva.
              </p>
              <p>
                O escritório oferece representação especializada para trabalhadores em causas de variadas complexidades, englobando reversão de justa causa, rescisão indireta, reconhecimento de vínculo empregatício e pleito de verbas devidas, além de prestar assessoria empresarial preventiva.
              </p>
              <p>
                Com foco em resultados consistentes, cada caso é submetido a uma análise estratégica detalhada. O objetivo é assegurar o cumprimento integral da legislação trabalhista, proporcionando segurança jurídica e transparência em todas as fases do processo.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-border">
              <div className="space-y-2">
                <p className="font-serif text-5xl font-black text-primary">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">Anos de Atuação</p>
              </div>
              <div className="space-y-2">
                <p className="font-serif text-5xl font-black text-primary">1500+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">Casos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
