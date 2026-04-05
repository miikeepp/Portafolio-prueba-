"use client"

import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"

type Testimonial = {
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "María García",
    role: "CEO, TechStartup",
    content: "Trabajar con este desarrollador fue una experiencia excepcional. Entregó el proyecto antes del plazo y superó todas nuestras expectativas. Su atención al detalle y comunicación fueron impecables.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO, Digital Solutions",
    content: "Un profesional altamente competente que entiende tanto los aspectos técnicos como las necesidades del negocio. Su código es limpio, bien documentado y fácil de mantener.",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Product Manager, InnovateTech",
    content: "Increíble capacidad para resolver problemas complejos con soluciones elegantes. Siempre dispuesto a ir más allá para asegurar que el producto final sea de la más alta calidad.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Roberto López",
    role: "Director de Desarrollo, CloudApp",
    content: "Su experiencia en React y Next.js nos ayudó a modernizar completamente nuestra plataforma. El resultado fue un aumento del 50% en la satisfacción del usuario.",
    rating: 5,
    avatar: "RL",
  },
]

const STORAGE_KEY = "portfolio_testimonials"

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials)
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [content, setContent] = useState("")
  const [rating, setRating] = useState(5)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return

    try {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) {
        setTestimonials(parsed)
      }
    } catch {
      // If parsing fails, keep default testimonials.
    }
  }, [])

  const getAvatar = (fullName: string) => {
    const initials = fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? "")
      .join("")

    return initials || "NA"
  }

  const handleAddTestimonial = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.trim() || !role.trim() || !content.trim()) return

    const newTestimonial: Testimonial = {
      name: name.trim(),
      role: role.trim(),
      content: content.trim(),
      rating,
      avatar: getAvatar(name),
    }

    const updatedTestimonials = [newTestimonial, ...testimonials]
    setTestimonials(updatedTestimonials)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTestimonials))

    setName("")
    setRole("")
    setContent("")
    setRating(5)
    setShowForm(false)
  }

  return (
    <section id="testimonios" className="py-24">
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Lo que dicen mis clientes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            He tenido el privilegio de trabajar con increíbles clientes y equipos. 
            Aquí está lo que tienen que decir sobre nuestra colaboración.
          </p>
          <button
            type="button"
            onClick={() => setShowForm((prev) => !prev)}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {showForm ? "Cancelar" : "Agregar testimonio"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleAddTestimonial}
            className="max-w-3xl mx-auto mb-10 rounded-2xl border border-border/60 p-5 md:p-6 bg-background/60"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                required
              />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Cargo / Empresa"
                className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                required
              />
            </div>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escribe el testimonio"
              className="mt-4 min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              required
            />

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <label htmlFor="rating" className="text-sm text-muted-foreground">
                Calificación:
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value={5}>5 estrellas</option>
                <option value={4}>4 estrellas</option>
                <option value={3}>3 estrellas</option>
                <option value={2}>2 estrellas</option>
                <option value={1}>1 estrella</option>
              </select>

              <button
                type="submit"
                className="ml-auto inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Guardar testimonio
              </button>
            </div>
          </form>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="pt-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  {`"${testimonial.content}"`}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
