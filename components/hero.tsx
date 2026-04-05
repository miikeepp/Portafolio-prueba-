"use client"

import { ArrowDown, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Disponible para trabajar</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
              <span className="text-foreground">Hola, soy </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Michael David Lagos
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              Ingeniero de Software Junior
            </p>

            <p className="text-lg text-muted-foreground/85 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-450">
              Actualmente me encuentro estudiando Ingeniería de Software y construyendo
              soluciones web modernas con React, Next.js y TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-600">
              <Button asChild size="lg" className="gap-2 px-8">
                <a href="#proyectos">
                  Ver Proyectos
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-750">
              <a
                href="https://github.com/miikeepp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:michael.lagos@campusucc.edu.co"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
            <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />

              <div className="relative w-full h-full rounded-full overflow-hidden border border-primary/30 shadow-[0_0_60px_rgba(255,107,120,0.25)]">
                <Image
                  src="/perfil.jpg"
                  alt="Imagen de presentación"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_58%,rgba(0,0,0,0.38)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre-mi" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  )
}
