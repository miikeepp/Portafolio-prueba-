"use client"

import { Code2, Palette, Zap, Users } from "lucide-react"

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend y Datos",
    skills: ["Node.js", "MongoDB", "Python", "Java"],
  },
  {
    title: "Herramientas",
    skills: ["Git", "Figma"],
  },
]

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Escribo código mantenible y escalable siguiendo las mejores prácticas",
  },
  {
    icon: Palette,
    title: "UI/UX",
    description: "Diseño interfaces intuitivas y visualmente atractivas",
  },
  {
    icon: Zap,
    title: "Rendimiento",
    description: "Optimizo aplicaciones para máxima velocidad y eficiencia",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo efectivamente en equipos ágiles y multidisciplinarios",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Sobre Mí</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Conoce más sobre mi trabajo
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="relative max-w-3xl mx-auto">
              {/* Decorative Element */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-1 bg-primary/40 rounded-full" />

              <div className="pt-4 space-y-4 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Soy <span className="text-foreground font-medium">Michael David Lagos</span>, 
                  <span className="text-foreground font-medium"> Ingeniero de Software Junior</span>.
                  Actualmente me encuentro estudiando la carrera y fortaleciendo mis habilidades
                  en el desarrollo de aplicaciones web modernas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mi enfoque combina diseño centrado en el usuario con código limpio y mantenible.
                  Disfruto aprender continuamente y aplicar buenas prácticas en cada proyecto.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Me motiva seguir creciendo como profesional, participar en proyectos retadores
                  y aportar soluciones útiles a problemas reales.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-colors duration-300 group text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills + Image */}
          <div className="space-y-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Habilidades Técnicas</h3>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="p-1"
                >
                  <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-md border border-border/50 text-foreground"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-center items-center pt-4">
              <div className="group relative w-60 h-60 sm:w-72 sm:h-72">
                <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary/70 via-accent/60 to-primary/40 blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative w-full h-full rounded-[1.6rem] p-[2px] bg-gradient-to-br from-primary via-accent to-primary/50 shadow-[0_18px_45px_rgba(255,95,109,0.32)]">
                  <div className="relative w-full h-full overflow-hidden rounded-[1.45rem] bg-background/70">
                    <img
                      src="https://s35726.pcdn.co/wp-content/uploads/2022/01/nft.gif"
                      alt="Nyan Cat"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%),linear-gradient(to_top,rgba(0,0,0,0.26),transparent_40%)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
