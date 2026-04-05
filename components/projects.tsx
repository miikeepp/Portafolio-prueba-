"use client"

import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Para Cálculo",
    description: "Proyecto académico enfocado en apoyar procesos de cálculo y práctica, desarrollado como parte de mi portafolio.",
    tags: ["React", "TypeScript", "Next.js"],
    github: "https://github.com/miikeepp/Para-Calculo",
    demo: "https://para-calculo.vercel.app/",
    featured: true,
  },
  {
    title: "Mentes Creativas",
    description: "Proyecto web enfocado en creatividad y colaboración, desarrollado como parte de mi proceso de formación en ingeniería de software.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/AlejandroBast/MentesCreativas",
    demo: "https://mentes-creativas.vercel.app/",
    featured: true,
  },
  {
    title: "Tinck Cash",
    description: "Frontend orientado a estructura y patrones de desarrollo, enfocado en buenas prácticas y organización del código.",
    tags: ["React", "TypeScript", "Arquitectura"],
    github: "https://github.com/AlejandroBast/EstructuraPatrones-front",
    demo: "https://estructura-patrones-front.vercel.app/inicio",
    featured: true,
  },
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="proyectos" className="py-24">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Portafolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Mis Proyectos Destacados
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado, demostrando mis habilidades
            en desarrollo frontend y backend.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-transparent border-border/50 overflow-hidden hover:border-primary/40 transition-colors duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-secondary">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/20 to-secondary/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-background/80 border border-border text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Haz clic aquí
                  </a>
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/70 border border-border text-xs font-medium text-foreground">
                  0{index + 1}
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">Ver en GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="sr-only">Ver Demo</span>
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="https://github.com/miikeepp" target="_blank" rel="noopener noreferrer">
              Ver todos en GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
