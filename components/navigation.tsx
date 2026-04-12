"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"

const navLinks = [
  { href: "#inicio", labelEs: "Inicio", labelEn: "Home" },
  { href: "#sobre-mi", labelEs: "Sobre Mí", labelEn: "About" },
  { href: "#proyectos", labelEs: "Proyectos", labelEn: "Projects" },
  { href: "#experiencia", labelEs: "Experiencia", labelEn: "Experience" },
  { href: "#testimonios", labelEs: "Testimonios", labelEn: "Testimonials" },
  { href: "#contacto", labelEs: "Contacto", labelEn: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark"

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

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

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
                {language === "es" ? link.labelEs : link.labelEn}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={language === "es" ? "Cambiar idioma" : "Change language"}
              className="px-2.5 py-1.5 rounded-lg border border-border/60 bg-background/60 text-xs font-semibold tracking-wide text-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              {language === "es" ? "ES" : "EN"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={language === "es" ? "Cambiar tema" : "Change theme"}
              className="p-2 rounded-lg border border-border/60 bg-background/60 text-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              {mounted && isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={language === "es" ? "Cambiar idioma" : "Change language"}
              className="text-foreground px-2.5 py-2 rounded-lg border border-border/60 bg-background/30 backdrop-blur-sm text-xs font-semibold"
            >
              {language === "es" ? "ES" : "EN"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={language === "es" ? "Cambiar tema" : "Change theme"}
              className="text-foreground p-2 rounded-lg border border-border/60 bg-background/30 backdrop-blur-sm"
            >
              {mounted && isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="text-foreground p-2 rounded-lg border border-border/60 bg-background/30 backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={language === "es" ? "Abrir menú" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            <button
              className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"
              onClick={() => setIsOpen(false)}
              aria-label={language === "es" ? "Cerrar menú" : "Close menu"}
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
                    {language === "es" ? link.labelEs : link.labelEn}
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
