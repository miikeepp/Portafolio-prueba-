"use client"

import { Mail, MapPin, Phone, Github, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "michael.lagos@campusucc.edu.co",
    href: "mailto:michael.lagos@campusucc.edu.co",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "3156750299",
    href: "tel:+573156750299",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Pasto, Nariño - Colombia",
    href: "#",
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/miikeepp", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Contact() {
  return (
    <section id="contacto" className="py-24">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades 
            para ser parte de tu visión.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Información de Contacto</h3>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-colors duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Sígueme</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Disponible para trabajar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Actualmente acepto proyectos freelance y oportunidades a tiempo completo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
