"use client"

import { Gamepad2, Music, Plane, Heart, Footprints, Camera } from "lucide-react"

const gustos = [
  { icon: Gamepad2, title: "Videojuegos", description: "Disfruto mucho jugar videojuegos en mi tiempo libre." },
  { icon: Footprints, title: "Caminar", description: "Me gusta salir a caminar y despejar la mente." },
  { icon: Plane, title: "Viajar", description: "Me encanta conocer lugares nuevos y diferentes culturas." },
  { icon: Music, title: "Música", description: "La música siempre me acompaña mientras estudio o trabajo." },
  { icon: Camera, title: "Fotografía", description: "Me gusta capturar momentos y paisajes cuando salgo." },
]

export function PersonalInfo() {
  return (
    <section id="info-personal" className="py-24">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Información Personal</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Un poco más sobre mí
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Estos son algunos de mis gustos e intereses fuera del desarrollo de software.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Mis gustos</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gustos.map((gusto) => (
              <div
                key={gusto.title}
                className="p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <gusto.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{gusto.title}</h4>
                <p className="text-sm text-muted-foreground">{gusto.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
