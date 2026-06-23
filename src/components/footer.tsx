import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logo-matheus.png"
              alt="Logo Matheus Cassiano"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-serif text-lg font-bold tracking-tight text-foreground">
              Matheus Cassiano
            </span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Matheus Cassiano Advocacia. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
