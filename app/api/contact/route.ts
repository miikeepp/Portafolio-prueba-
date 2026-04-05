import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { z } from "zod"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres.").max(100),
  email: z.string().trim().email("Ingresa un email valido.").max(120),
  subject: z.string().trim().min(3, "El asunto debe tener al menos 3 caracteres.").max(140),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres.").max(3000),
})

type ContactPayload = z.infer<typeof contactSchema>
type StoredMessage = ContactPayload & {
  id: string
  createdAt: string
}

const storageDir = join(process.cwd(), "data")
const storageFile = join(storageDir, "contact-submissions.json")

const smtpConfigSchema = z.object({
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  CONTACT_TO_EMAIL: z.string().email(),
  CONTACT_FROM_EMAIL: z.string().email().optional(),
  SMTP_SECURE: z
    .string()
    .optional()
    .transform((value) => value === "true"),
})

async function getStoredMessages() {
  try {
    const fileContents = await readFile(storageFile, "utf-8")
    const parsed = JSON.parse(fileContents)

    return Array.isArray(parsed) ? (parsed as StoredMessage[]) : []
  } catch {
    return []
  }
}

function getSmtpConfig() {
  const parsed = smtpConfigSchema.safeParse(process.env)

  if (!parsed.success) {
    return null
  }

  return parsed.data
}

async function sendContactEmail(payload: ContactPayload) {
  const config = getSmtpConfig()

  if (!config) {
    throw new Error("Falta configurar SMTP en el servidor.")
  }

  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: config.SMTP_SECURE,
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASS,
    },
  })

  const fromEmail = config.CONTACT_FROM_EMAIL ?? config.SMTP_USER

  await transporter.sendMail({
    from: fromEmail,
    to: config.CONTACT_TO_EMAIL,
    replyTo: payload.email,
    subject: `[Portfolio] ${payload.subject}`,
    text: [
      `Nombre: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      "Mensaje:",
      payload.message,
    ].join("\n"),
    html: `
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Asunto:</strong> ${payload.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br/>")}</p>
    `,
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Datos de formulario invalidos." },
        { status: 400 },
      )
    }

    const payload = parsed.data
    const storedMessages = await getStoredMessages()

    const newMessage: StoredMessage = {
      ...payload,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }

    await mkdir(storageDir, { recursive: true })
    await writeFile(storageFile, JSON.stringify([newMessage, ...storedMessages], null, 2), "utf-8")
    await sendContactEmail(payload)

    return NextResponse.json({ success: true }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar el mensaje o enviar el correo." },
      { status: 500 },
    )
  }
}
