"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const education = [
  {
    titleEs: "Técnico en Sistemas",
    titleEn: "Systems Technician",
    institutionEs: "Institución Técnico Industrial de Pasto",
    institutionEn: "Institución Técnico Industrial de Pasto",
    periodEs: "Finalizado",
    periodEn: "Completed",
    descriptionEs: "Formación técnica en sistemas y fundamentos de desarrollo de software.",
    descriptionEn: "Technical training in systems and software development fundamentals.",
  },
  {
    titleEs: "Ingeniería de Software",
    titleEn: "Software Engineering",
    institutionEs: "Universidad Cooperativa de Colombia",
    institutionEn: "Universidad Cooperativa de Colombia",
    periodEs: "En curso",
    periodEn: "In progress",
    descriptionEs: "Actualmente cursando la carrera, con enfoque en desarrollo de software y buenas prácticas.",
    descriptionEn: "Currently pursuing the degree, focused on software development and best practices.",
  },
]

export function Experience() {
  const { language } = useLanguage()

  return (
    <section id="experiencia" className="py-24">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{language === "es" ? "Trayectoria" : "Journey"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            {language === "es" ? "Educación" : "Education"}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{language === "es" ? "Educación" : "Education"}</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-[11px] top-10 w-0.5 h-[calc(100%+24px)] bg-border" />
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 bg-background border-border group-hover:border-primary transition-colors" />

                  <div className="p-5 rounded-xl border border-border/50 hover:border-primary/40 transition-colors duration-300">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {language === "es" ? edu.titleEs : edu.titleEn}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === "es" ? edu.institutionEs : edu.institutionEn}
                    </p>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {language === "es" ? edu.periodEs : edu.periodEn}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {language === "es" ? edu.descriptionEs : edu.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
