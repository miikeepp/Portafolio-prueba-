"use client"

import { Gamepad2, Music, Plane, Heart, Footprints, Camera } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const gustos = [
  { icon: Gamepad2, titleEs: "Videojuegos", titleEn: "Video Games", descriptionEs: "Disfruto mucho jugar videojuegos en mi tiempo libre.", descriptionEn: "I really enjoy playing video games in my free time." },
  { icon: Footprints, titleEs: "Caminar", titleEn: "Walking", descriptionEs: "Me gusta salir a caminar y despejar la mente.", descriptionEn: "I like going for walks to clear my mind." },
  { icon: Plane, titleEs: "Viajar", titleEn: "Travel", descriptionEs: "Me encanta conocer lugares nuevos y diferentes culturas.", descriptionEn: "I love discovering new places and different cultures." },
  { icon: Music, titleEs: "Música", titleEn: "Music", descriptionEs: "La música siempre me acompaña mientras estudio o trabajo.", descriptionEn: "Music always keeps me company while I study or work." },
  { icon: Camera, titleEs: "Fotografía", titleEn: "Photography", descriptionEs: "Me gusta capturar momentos y paisajes cuando salgo.", descriptionEn: "I enjoy capturing moments and landscapes when I go out." },
]

export function PersonalInfo() {
  const { language } = useLanguage()

  return (
    <section id="info-personal" className="py-24">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{language === "es" ? "Información Personal" : "Personal Info"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            {language === "es" ? "Un poco más sobre mí" : "A little more about me"}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {language === "es"
              ? "Estos son algunos de mis gustos e intereses fuera del desarrollo de software."
              : "These are some of my interests beyond software development."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">{language === "es" ? "Mis gustos" : "My interests"}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gustos.map((gusto) => (
              <div
                key={gusto.titleEs}
                className="p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <gusto.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{language === "es" ? gusto.titleEs : gusto.titleEn}</h4>
                <p className="text-sm text-muted-foreground">{language === "es" ? gusto.descriptionEs : gusto.descriptionEn}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
