"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="w-full px-6 md:px-10 xl:px-16 2xl:px-24 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="text-2xl font-bold text-primary">
            {"<Dev />"}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg border border-border/60 bg-background/30 backdrop-blur-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            <button
              className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
            />

            <div className="absolute top-20 left-4 right-4 rounded-2xl border border-primary/25 bg-background/95 backdrop-blur-xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] animate-in fade-in slide-in-from-top-3 duration-200">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
