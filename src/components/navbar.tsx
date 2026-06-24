"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Serviços", href: "#servicos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Blog", href: "#blog" },
]

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

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0F163A]/90 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/images/logo-matheus.png"
              alt="Logo Matheus Cassiano"
              width={200}
              height={60}
              className="h-14 w-auto transition-transform group-hover:scale-105 brightness-0 invert"
              priority
            />
            <span className="font-serif text-lg md:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
              Matheus Cassiano
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8 mr-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <a 
              href="https://wa.me/5521997282115?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20com%20o%20Dr.%20Matheus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="font-bold rounded-xl px-5 h-11 gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/10 border-none cursor-pointer">
                <WhatsAppIcon className="h-6 w-6" />
                Agendar uma consulta
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F163A]/95 backdrop-blur-md border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-4 text-lg font-serif font-bold text-white/80 hover:text-white transition-colors border-b border-white/10 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-4">
              <a 
                href="https://wa.me/5521997282115?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20com%20o%20Dr.%20Matheus."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full h-12 font-bold text-lg gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border-none cursor-pointer flex items-center justify-center">
                  <WhatsAppIcon className="h-7 w-7" />
                  Agendar uma consulta
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
