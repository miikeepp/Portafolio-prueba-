"use client"

import { Code, Layout, Database, Rocket } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Desarrollo Frontend",
    description: "Interfaces de usuario modernas y responsivas con React, Next.js y las últimas tecnologías web.",
    features: ["React/Next.js", "Tailwind CSS", "Animaciones", "Accesibilidad"],
  },
  {
    icon: Database,
    title: "Desarrollo Backend",
    description: "APIs robustas y escalables con Node.js, bases de datos SQL y NoSQL, y arquitectura de microservicios.",
    features: ["Node.js", "PostgreSQL", "MongoDB", "REST/GraphQL"],
  },
  {
    icon: Code,
    title: "Consultoría Técnica",
    description: "Asesoramiento en arquitectura de software, revisión de código y mejores prácticas de desarrollo.",
    features: ["Code Review", "Arquitectura", "Performance", "Seguridad"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Desarrollo rápido de productos mínimos viables para validar ideas de negocio.",
    features: ["Prototipado", "Iteración Rápida", "Lanzamiento", "Escalabilidad"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            ¿Qué puedo hacer por ti?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ofrezco soluciones completas de desarrollo web adaptadas a las necesidades 
            específicas de cada proyecto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs rounded-full border border-border/50 text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
