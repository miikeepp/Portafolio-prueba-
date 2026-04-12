"use client"

import { Github, Twitter, Mail, Heart, ArrowUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const socialLinks = [
  { icon: Github, href: "https://github.com/miikeepp", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:michael.lagos@campusucc.edu.co", label: "Email" },
]

export function Footer() {
  const { language } = useLanguage()

  const footerLinks = [
    {
      title: language === "es" ? "Navegación" : "Navigation",
      links: [
        { label: language === "es" ? "Inicio" : "Home", href: "#inicio" },
        { label: language === "es" ? "Sobre Mí" : "About", href: "#sobre-mi" },
        { label: language === "es" ? "Proyectos" : "Projects", href: "#proyectos" },
        { label: language === "es" ? "Experiencia" : "Experience", href: "#experiencia" },
      ],
    },
    {
      title: language === "es" ? "Contacto" : "Contact",
      links: [
        { label: language === "es" ? "Testimonios" : "Testimonials", href: "#testimonios" },
        { label: language === "es" ? "Contacto" : "Contact", href: "#contacto" },
        { label: "CV", href: "/cv.pdf" },
      ],
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="#inicio" className="text-2xl font-bold text-primary inline-block">
              Michael David Lagos
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {language === "es"
                ? "Ingeniero de Software Junior en formación, enfocado en construir soluciones web modernas y seguir aprendiendo cada día."
                : "Junior Software Engineer in training, focused on building modern web solutions and learning every day."}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Michael David Lagos. {language === "es" ? "Hecho con" : "Made with"}{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> {language === "es" ? "usando" : "using"} Next.js
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
            aria-label={language === "es" ? "Volver arriba" : "Back to top"}
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
